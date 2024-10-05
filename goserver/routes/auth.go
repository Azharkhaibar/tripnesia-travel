package routes

import (
	"goserver/controllers"
	"goserver/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	// Authentication routes
	authRoutes := r.Group("/auth")
	{
		authRoutes.POST("/register", controllers.Register)
		authRoutes.POST("/login", controllers.Login)

		authRoutes.GET("/user", controllers.GetAllUser)
		authRoutes.GET("/user/:id", controllers.GetUserById)
		authRoutes.DELETE("/user/:id", controllers.DeleteUserById)

		// Protected route
		authRoutes.GET("/protected", middleware.AuthMiddleware(), func(c *gin.Context) {
			username := c.MustGet("username").(string)
			c.JSON(200, gin.H{"message": "Welcome " + username})
		})
	}

	// Subscriber routes
	subcriberRoute := r.Group("/subcriber/user")
	{
		subcriberRoute.GET("/", controllers.GetAllSubscriber)
		subcriberRoute.GET("/:email", controllers.GetSubscriberByEmail)
		subcriberRoute.POST("/", controllers.CreateSubscriber)
		subcriberRoute.DELETE("/:id", controllers.DeleteSubscriber)
	}
}
