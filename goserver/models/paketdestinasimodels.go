package models
import (
	"goserver/config"
    "database/sql"
    "errors"
)

type PaketDestinasi struct {
	Id        int    `json:"id"`
	NamaPaket string `json:"nama_paket"`
	Tempat    string `json:"tempat"`
	Rating    int    `json:"rating"`
	Harga     int    `json:"harga"`
	BatasHari int    `json:"batas_hari"`
	Img       []byte `json:"img"`
}

func GetAllPaketDestinasi() ([]PaketDestinasi, error) {
	var PaketDestinasiServices []PaketDestinasi
	queryDB := "SELECT id, nama_paket, tempat, rating, harga, batas_hari, img FROM paket_destinasi"
	rowsDB, err := config.DB.Query(queryDB)
	if err != nil {
		return nil, err
	}
	defer rowsDB.Close()

	for rowsDB.Next() {
		var Paket PaketDestinasi
		if err := rowsDB.Scan(&Paket.Id, &Paket.NamaPaket, &Paket.Tempat, &Paket.Rating, &Paket.Harga, &Paket.BatasHari, &Paket.Img); err != nil {
			return nil, err
		}
		PaketDestinasiServices = append(PaketDestinasiServices, Paket)
	}

	if err := rowsDB.Err(); err != nil {
		return nil, err
	}

	return PaketDestinasiServices, nil
}

func GetPaketDestinasiById(id int) (*PaketDestinasi, error) {
	var Paket PaketDestinasi
	queryDB := "SELECT id, nama_paket, tempat, rating, harga, batas_hari, img FROM paket_destinasi WHERE id = ?"
	err := config.DB.QueryRow(queryDB, id).Scan(&Paket.Id, &Paket.NamaPaket, &Paket.Tempat, &Paket.Rating, &Paket.Harga, &Paket.BatasHari, &Paket.Img)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errors.New("Id Not Found")
		}
		return nil, err
	}
	return &Paket, nil
}

