package controllers

import (
    "fmt" 
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
    // Hash password
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

func GetAllUser(c *gin.Context) {
    users, err := models.GetAllUsers()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
        return
    }
    c.JSON(http.StatusOK, users)
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

func DeleteUserById(c *gin.Context) {
    idParam := c.Param("id")
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
        return
    }
    err = models.DeleteUserById(id)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal delete ID"})
        return
    }
    c.JSON(http.StatusOK, gin.H{"message": "Sukses menghapus data"})
}

func Login(c *gin.Context) {
    var loginUser models.UserAuth
    if err := c.ShouldBindJSON(&loginUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
        return
    }

    foundUser, err := models.GetUserByEmail(loginUser.Email)
    if err != nil {
        fmt.Printf("Error fetching user: %v\n", err)
        c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
        return
    }

    fmt.Printf("Retrieved user: %v\n", foundUser)
    fmt.Printf("Password Hash: %s\n", foundUser.Password)
    if err := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(loginUser.Password)); err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid password"})
        return
    }

    expirationTime := time.Now().Add(1 * time.Hour)
    claims := &Claims{
        Username: foundUser.Username,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(expirationTime),
        },
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    tokenString, err := token.SignedString(config.JwtKey)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create token"})
        return
    }
    c.JSON(http.StatusOK, gin.H{
        "token":     tokenString,
        "expiresAt": expirationTime.Format(time.RFC3339),
    })
}
