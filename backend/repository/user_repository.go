package repository

import (
	"backend-coffee-taste-journal/config"
	"backend-coffee-taste-journal/model"
)

func CreateUser(user *model.User) error {
	result := config.DB.Create(user)
	return result.Error
}

func GetUserByUsername(username string) (model.User, error) {
	var user model.User
	err := config.DB.Where("username = ?", username).First(&user).Error
	return user, err
}
