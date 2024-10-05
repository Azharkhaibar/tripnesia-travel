package controllers
import (
	"net/http"
	"strconv"
	"goserver/models"
	"github.com/gin-gonic/gin"
)

func GetAllPaketDestinasi(c *gin.Context) {
    PaketDestinasi, err := models.GetAllPaketDestinasi()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch Paket"})
		return
	}
	c.JSON(http.StatusOK, PaketDestinasi)
}

func GetPaketDestinasiById(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Paket ID"})
		return
	}

	PaketDestinasi, err := models.GetPaketDestinasiById(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Paket Not Found"})
		return
	}

	c.JSON(http.StatusOK, PaketDestinasi)
}
