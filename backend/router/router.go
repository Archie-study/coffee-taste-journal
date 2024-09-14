package router

import (
	"backend-coffee-taste-journal/controller"
	"backend-coffee-taste-journal/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.POST("/signup", controller.SignUp)
	r.POST("/login", controller.Login)

	// Grup rute yang dilindungi JWT
	protected := r.Group("/protected")
	protected.Use(middleware.AuthMiddleware()) // Gunakan middleware di sini
	{
		protected.GET("/profile", controller.Profile) // Contoh rute yang dilindungi
	}
}
