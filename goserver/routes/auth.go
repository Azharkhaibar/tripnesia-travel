package routes

import (
	"goserver/controllers"
	"goserver/middleware"
	"github.com/gin-gonic/gin"
)

func SetupAuthRoutes(r *gin.Engine) {
	authRoutes := r.Group("/auth")
	{
		authRoutes.POST("/register", controllers.Register)
		authRoutes.POST("/login", controllers.Login)

		authRoutes.GET("/user/:id", controllers.GetUserById)

		// Rute yang dilindungi dengan middleware
		authRoutes.GET("/protected", middleware.AuthMiddleware(), func(c *gin.Context) {
			username := c.MustGet("username").(string)
			c.JSON(200, gin.H{"message": "Welcome " + username})
		})
	}
}
