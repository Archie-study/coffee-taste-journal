package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Profile(c *gin.Context) {
	// Ambil username dari context yang disimpan oleh middleware JWT
	username, _ := c.Get("username")

	c.JSON(http.StatusOK, gin.H{
		"message":  "This is your profile",
		"username": username,
	})
}
