package models

import (
    "goserver/config"
    "log"
)

type Newsletter struct {
    Id    int    `json:"id"`
    Email string `json:"email" binding:"required,email"`
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

func GetSubcriberByEmail(email string) (*Newsletter, error) {
    var subcriber Newsletter
    query := "SELECT id, email FROM newsletter WHERE email = ?"
    err := config.DB.QueryRow(query, email).Scan(&subcriber.Id, &subcriber.Email)
    if err != nil {
        return nil, err
    }
    return &subcriber, nil
}

func CreateSubcriber(subcriber *Newsletter) error {
    query := "INSERT INTO newsletter (email) VALUES (?)"
    _, err := config.DB.Exec(query, subcriber.Email)
    if err != nil {
        log.Println("Error membuat data subscriber:", err)
        return err
    }
    return nil
}

func DeleteSubcriber(id int) error {
    query := "DELETE FROM newsletter WHERE id = ?"
    _, err := config.DB.Exec(query, id)
    if err != nil {
        return err
    }
    return nil
}
