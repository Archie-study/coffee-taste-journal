package service

import (
	"backend-coffee-taste-journal/model"
	"backend-coffee-taste-journal/repository"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func RegisterUser(username, email, password string) error {
	hashedPassword, err := HashPassword(password)
	if err != nil {
		return err
	}

	user := model.User{
		Username: username,
		Email:    email,
		Password: hashedPassword,
	}

	return repository.CreateUser(&user)
}

func VerifyPassword(hashedPassword, password string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}
