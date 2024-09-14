package main

import (
	"backend-coffee-taste-journal/config"
	"backend-coffee-taste-journal/middleware"
	"backend-coffee-taste-journal/router"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database connection
	config.ConnectDatabase()

	r := gin.Default()

	// Apply middleware
	r.Use(middleware.CORS())

	// Setup routes
	router.SetupRoutes(r)

	// Run server
	if err := r.Run(":4000"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
