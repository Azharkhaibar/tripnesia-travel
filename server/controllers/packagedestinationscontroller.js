const PaketDestinasiModels = require("../models/packagedestinationmodels");

const getAllPaketDestinasi = async (req, res) => {
  try {
    const paketDestinasi = await PaketDestinasiModels.findAll();

    // Convert image BLOB to base64 string
    const formattedPaketDestinasi = paketDestinasi.map((paket) => ({
      ...paket.toJSON(), // Convert to plain object
      img: paket.img ? paket.img.toString("base64") : null, // Convert to base64
    }));

    console.log("Fetched Paket Destinasi data:", formattedPaketDestinasi);
    res.status(200).json(formattedPaketDestinasi);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Failed to fetch Paket Destinasi data");
  }
};

const getPaketDestinasiById = async (req, res) => {
  try {
    const id = req.params.id;
    const paket = await PaketDestinasiModels.findOne({ where: { id: id } });

    if (!paket) {
      return res.status(404).json({ message: "Paket Not Found" });
    }
    const formattedPaket = {
      ...paket.toJSON(),
      img: paket.img ? paket.img.toString("base64") : null, // Convert to base64
    };

    res.status(200).json(formattedPaket);
  } catch (error) {
    console.error("Error fetching Data Paket by ID:", error.message);
    res.status(500).send("Failed to fetch Data Paket Destinasi data");
  }
};

module.exports = {
  getAllPaketDestinasi,
  getPaketDestinasiById,
};
