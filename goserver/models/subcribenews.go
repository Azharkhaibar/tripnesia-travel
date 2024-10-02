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



