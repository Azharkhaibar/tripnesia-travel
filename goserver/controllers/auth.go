package controllers

import (
    "goserver/config"
    "net/http"
    "time"
    "strconv"
    "github.com/gin-gonic/gin"
    "github.com/golang-jwt/jwt/v4"
    "golang.org/x/crypto/bcrypt"
    "goserver/models"
)

// Claims JWT
type Claims struct {
    Username string `json:"username"`
    jwt.RegisteredClaims
}

// Register user baru
func Register(c *gin.Context) {
    var newUser models.UserAuth
    if err := c.ShouldBindJSON(&newUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Data Error"})
        return
    }
    // hash password
    hashPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal Hash Password"})
        return
    }
    newUser.Password = string(hashPassword)
    err = models.CreateUser(&newUser)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menambahkan data User"})
        return
    }

    c.JSON(http.StatusCreated, newUser)
}

func GetUserById(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}
	user, err := models.GetUserById(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}
	c.JSON(http.StatusOK, user)
}


// Login user
func Login(c *gin.Context) {
    var loginUser models.UserAuth
    if err := c.ShouldBindJSON(&loginUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
        return
    }

    // Ambil user dari database berdasarkan email
    foundUser, err := models.GetUserByEmail(loginUser.Email)
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
        return
    }

    // Cek password
    if err := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(loginUser.Password)); err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid password"})
        return
    }

    // Buat token JWT
    TimeExpiration := time.Now().Add(1 * time.Hour)
    claims := &Claims{
        Username: foundUser.Username,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(TimeExpiration),
        },
    }
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    tokenString, err := token.SignedString(config.JwtKey)  // Menggunakan config.JwtKey
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create token"})
        return
    }

    // Kirim token ke client
    c.JSON(http.StatusOK, gin.H{"token": tokenString})
}
