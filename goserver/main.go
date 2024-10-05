package main

import (
	"goserver/config"
	"goserver/routes"
	"log"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"time"
)

func main() {
	// Connect to the database
	config.ConnectDB()

	// Set Gin to release mode
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	// CORS middleware setup
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Set the allowed frontend origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true, // Allow credentials (cookies, authorization headers)
		MaxAge:           12 * time.Hour,
	}))

	// Setup routes
	routes.SetupRoutes(r)
	routes.SetupPaketRoutes(r)

	// Start the server
	if err := r.Run(":3001"); err != nil {
		log.Fatal("Server failed to start:", err)
	}
}
