package routes

import (
	"goserver/controllers"
	"github.com/gin-gonic/gin"
)

func SetupSubcriberRoute(r *gin.Engine) {
	subcriberRoute := r.Group("/subcriber")
	{
		subcriberRoute.GET("/", controllers.GetAllSubscriber)
		subcriberRoute.GET("/:email", controllers.GetSubscriberByEmail)
		subcriberRoute.POST("/", controllers.CreateSubscriber)
		subcriberRoute.DELETE("/:id", controllers.DeleteSubscriber)
	}
}
