package middleware

import (
    "net/http"
    "goserver/config"
    "goserver/controllers"
    "github.com/gin-gonic/gin"
    "github.com/golang-jwt/jwt/v4"
)

func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        StringTokenAuth := c.GetHeader("Authorization")

        if StringTokenAuth == "" {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Request does not contain an access token"})
            c.Abort()
            return
        }

        getAuthToken := &controllers.Claims{}
        token, err := jwt.ParseWithClaims(StringTokenAuth, getAuthToken, func(token *jwt.Token) (interface{}, error) {
            return config.JwtKey, nil  // Menggunakan config.JwtKey
        })

        if err != nil || !token.Valid {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
            c.Abort()
            return
        }

        c.Set("username", getAuthToken.Username)
        c.Next()
    }
}
