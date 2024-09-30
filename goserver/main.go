package main

import (
    "goserver/config"
    "goserver/routes"
    "log"
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
)

func main() {
    // Inisialisasi koneksi database
    config.ConnectDB()

    // Inisialisasi Gin
    gin.SetMode(gin.ReleaseMode)
    r := gin.Default()
    r.SetTrustedProxies(nil)

    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"POST", "GET", "PUT", "DELETE"}, 
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
    }))

    // Setup routes
    routes.SetupAuthRoutes(r)

    // Jalankan server di port 8080
    if err := r.Run(":8080"); err != nil {
        log.Fatal("Server failed to start:", err)
    }
}
