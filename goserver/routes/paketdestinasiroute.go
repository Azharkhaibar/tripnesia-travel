package routes

import (
	"goserver/controllers"
	"github.com/gin-gonic/gin"
)

func SetupPaketRoutes(r *gin.Engine) {
	PaketRoute := r.Group("/paketdestinasi")
	{
		PaketRoute.GET("/", controllers.GetAllPaketDestinasi)
		PaketRoute.GET("/:id", controllers.GetPaketDestinasiById)
	}
}