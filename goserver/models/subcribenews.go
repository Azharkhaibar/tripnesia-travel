package models

import (
    "goserver/config"
    "log"
    "database/sql"
    "errors"
)

type Newsletter struct {
	Id int `json: "id"`
	Email string `json: "email"`
}

func GetAllNewsletterEmail() ([]Newsletter, error) {
	var News []Newsletter
	queryDB := "SELECT id, email FROM newsletter"
	rowsDB, err := config.DB.Query(queryDB)
	if err != nil {
		return nil, err
	}
	defer rowsDB.Close()

	for rowsDB.Next() {
		var subcribedNews Newsletter
		if err := rowsDB.Scan(&subcribedNews.Id, &subcribedNews.Email); err != nil {
			return nil, err
		}
		News = append(News, subcribedNews)
	}
	if err := rowsDB.Err(); err != nil {
		return nil, err
	}
	return News, nil
}

func GetUserByEmail(email string) (*Newsletter, error) {
    var subcriber Newsletter
    ExecuteQueryRow := "SELECT id, username, firstname, lastname, email, password FROM authusers WHERE email = ?"
    err := config.DB.QueryRow(ExecuteQueryRow, email).Scan(&subcriber.Id, &subcriber.Email)
    if err != nil {
        return nil, err
    }

    return &subcriber, nil
}

func CreateSubcriber(subcriber *Newsletter) error {
	ExecuteQueryRow := "INSERT INTO newsletter (email) VALUES (?)"
	_, err := config.DB.Exec(ExecuteQueryRow, subcriber.Email)
	if err != nil {
		log.Println("error membuat data subriber")
		return nil
	}
}

func DeleteSubcriber(id int) error {
	DeleteQuery := "DELETE FROM newsletter WHERE id = ?"
	_, err := config.DB.Exec(DeleteQuery, id)
	if err != nil {
		return err
	}
	return nil
}



