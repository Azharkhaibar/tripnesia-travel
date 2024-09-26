package models

import (
    "goserver/config"
    "log"
)

// UserAuth digunakan untuk proses autentikasi
type UserAuth struct {
    Id        int    `json:"id"`
    Username  string `json:"username"`
    Firstname string `json:"firstname"`
    Lastname  string `json:"lastname"`
    Email     string `json:"email"`
    Password  string `json:"password"`
}

// GetUserByEmail mengambil data user berdasarkan email
func GetUserByEmail(email string) (*UserAuth, error) {
    var user UserAuth
    query := "SELECT id, username, firstname, lastname, email, password FROM authusers WHERE email = ?"
    err := config.DB.QueryRow(query, email).Scan(&user.Id, &user.Username, &user.Firstname, &user.Lastname, &user.Email, &user.Password)
    if err != nil {
        return nil, err
    }

    return &user, nil
}

// CreateUser untuk menyimpan user baru di database
func CreateUser(user *UserAuth) error {
    query := "INSERT INTO authusers (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)"
    _, err := config.DB.Exec(query, user.Username, user.Firstname, user.Lastname, user.Email, user.Password)
    if err != nil {
        log.Println("Error membuat Data User:", err)
        return err
    }

    return nil
}
