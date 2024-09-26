package config

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql" // import driver
    "log"
)

var DB *sql.DB

// ConnectDB initializes the database connection
func ConnectDB() {
    var err error
    // Replace with your own database credentials
    dsn := "root@tcp(localhost:3306)/kolapotrip"

    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("Error opening database:", err)
    }

    // Check if the connection is successful
    err = DB.Ping()
    if err != nil {
        log.Fatal("Error connecting to database:", err)
    }

    fmt.Println("Database connected successfully!")
}
