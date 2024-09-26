package main

import (
    "goserver/config"
    "goserver/routes"
    "log"

    "github.com/gin-gonic/gin"
)

func main() {
    // Inisialisasi koneksi database
    config.ConnectDB()

    // Inisialisasi Gin
    gin.SetMode(gin.ReleaseMode)
    r := gin.Default()
    r.SetTrustedProxies(nil)

    // Setup routes
    routes.SetupAuthRoutes(r)

    // Jalankan server di port 8080
    if err := r.Run(":8080"); err != nil {
        log.Fatal("Server failed to start:", err)
    }
}
