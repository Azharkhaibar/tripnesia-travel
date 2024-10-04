package controllers

import (
	"net/http"
	"strconv"

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
	var subscriber models.Newsletter
	if err := c.ShouldBindJSON(&subscriber); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
		return
	}

	err := models.CreateSubcriber(&subscriber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create subscriber"})
		return
	}

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
