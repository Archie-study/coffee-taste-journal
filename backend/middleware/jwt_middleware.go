package middleware

import (
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

var jwtKey = []byte("your_secret_key") // Sama dengan key yang digunakan di auth_controller.go

// Claims struct untuk JWT payload
type Claims struct {
	Username string `json:"username"`
	jwt.StandardClaims
}

// AuthMiddleware untuk validasi token JWT
func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Ambil token dari header Authorization
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header required"})
			c.Abort()
			return
		}

		// Format Authorization header adalah "Bearer <token>"
		tokenString := strings.Split(authHeader, "Bearer ")
		if len(tokenString) != 2 {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token format"})
			c.Abort()
			return
		}

		// Parse token
		token, err := jwt.ParseWithClaims(tokenString[1], &Claims{}, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		// Cek validitas token
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		// Pastikan token masih valid
		if claims, ok := token.Claims.(*Claims); ok && token.Valid {
			// Simpan username dalam context untuk digunakan di rute yang dilindungi
			c.Set("username", claims.Username)
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		// Lanjutkan ke handler berikutnya
		c.Next()
	}
}
