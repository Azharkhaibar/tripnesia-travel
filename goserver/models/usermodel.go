package models

import (
    "goserver/config"
    "log"
    "database/sql"
    "errors"
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

func GetAllUsers() ([]UserAuth, error) {
    var userAuth []UserAuth
    queryDB := "SELECT id, username, firstname, lastname, email, password FROM authusers"
    rowsDB, err := config.DB.Query(queryDB)
    if err != nil {
        return nil, err
    }
    defer rowsDB.Close()

    for rowsDB.Next() {
        var user UserAuth
        if err := rowsDB.Scan(&user.Id, &user.Username, &user.Firstname, &user.Lastname, &user.Email, &user.Password); err != nil {
            return nil, err
        }
        userAuth = append(userAuth, user)
    }
    if err := rowsDB.Err(); err != nil {
        return nil, err
    }
    return userAuth, nil
}

// GetUserByEmail mengambil data user berdasarkan email
func GetUserByEmail(email string) (*UserAuth, error) {
    var user UserAuth
    ExecuteQueryRow := "SELECT id, username, firstname, lastname, email, password FROM authusers WHERE email = ?"
    err := config.DB.QueryRow(ExecuteQueryRow, email).Scan(&user.Id, &user.Username, &user.Firstname, &user.Lastname, &user.Email, &user.Password)
    if err != nil {
        return nil, err
    }

    return &user, nil
}

func GetUserById(id int) (*UserAuth, error) {
	var user UserAuth
	query := "SELECT id, username, firstname, lastname, email, password FROM authusers WHERE id = ?"
	err := config.DB.QueryRow(query, id).Scan(&user.Id, &user.Username, &user.Firstname, &user.Lastname, &user.Email, &user.Password)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errors.New("user not found")
		}
		return nil, err
	}
	return &user, nil
}

func DeleteUserById(id int) error {
    queryDB := "DELETE FROM authusers WHERE id = ?"
    _, err := config.DB.Exec(queryDB, id)
    if err != nil {
        return err
    }
    return nil
}

// CreateUser untuk menyimpan user baru di database
func CreateUser(user *UserAuth) error {
    ExecuteQueryRow := "INSERT INTO authusers (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)"
    _, err := config.DB.Exec(ExecuteQueryRow, user.Username, user.Firstname, user.Lastname, user.Email, user.Password)
    if err != nil {
        log.Println("Error membuat Data User:", err)
        return err
    }

    return nil
}
