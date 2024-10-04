package main

import (
    "goserver/config"
    "goserver/routes"
    "log"
    "github.com/gin-gonic/gin"
)


func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
        c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization")
        c.Header("Access-Control-Allow-Origin", "http://localhost:3000")
        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204) 
            return
        }
        c.Next()
    }
}

func main() {
    config.ConnectDB()

    gin.SetMode(gin.ReleaseMode)
    r := gin.Default()

    // Gunakan middleware CORS kustom
    r.Use(CORSMiddleware())

    // Log header respons untuk debugging
    r.Use(func(c *gin.Context) {
        c.Next()
        log.Println("Response Headers:", c.Writer.Header())
    })

    // Setup routes
    routes.SetupAuthRoutes(r)
    routes.SetupSubcriberRoute(r)

    // Mulai server
    if err := r.Run(":8080"); err != nil {
        log.Fatal("Server failed to start:", err)
    }
}
