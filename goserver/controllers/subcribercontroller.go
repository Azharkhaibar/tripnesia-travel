package controllers

import (
	"net/http"
	"strconv"
    "log"
	"goserver/models"

	"github.com/gin-gonic/gin"
)


func GetAllSubscriber(c *gin.Context) {
	subscribers, err := models.GetAllNewsletterEmail()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch subscribers"})
		return
	}
	c.JSON(http.StatusOK, subscribers)
}

func GetSubscriberByEmail(c *gin.Context) {
	email := c.Param("email")
	subscriber, err := models.GetUserByEmail(email)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Subscriber not found"})
		return
	}
	c.JSON(http.StatusOK, subscriber)
}

func CreateSubscriber(c *gin.Context) {
    log.Println("menerima data subcriber")
    var subscriber models.Newsletter
    // Bind JSON 
    if err := c.ShouldBindJSON(&subscriber); err != nil {
        log.Println("Error Binding:", err)
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
        return
    }

    log.Printf("data Subcriber: %+v\n", subscriber)
    err := models.CreateSubcriber(&subscriber) // Pastikan ini sesuai dengan nama fungsi Anda
    if err != nil {
        log.Println("Error Membuat subscriber:", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create subscriber"})
        return
    }

    // Respons sukses
    c.JSON(http.StatusCreated, gin.H{"message": "Subscriber created successfully"})
}



func DeleteSubscriber(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid subscriber ID"})
		return
	}

	err = models.DeleteSubcriber(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete subscriber"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Subscriber deleted successfully"})
}
