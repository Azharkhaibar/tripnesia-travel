const tripsModels = require('../models/tripmodels')

const postDataTrips = async (req, res) => {
    try {
        const { destinasi, deskripsi, price, start_date, end_date, availability } = req.body;
        const postResponse = new tripsModels({
            destinasi, deskripsi, price, start_date, end_date, availability
        })

        await postResponse.save();
        res.json(postResponse, {
            message: 'berhasil di tambahkan'
        })
        
    } catch (error) {
        console.log(error.message);
        res.status(400).send('Status Tidak berhasil di post')
        
    }
}

const getDataTrips = async (req, res) => {
    try {
        const getResponse = await tripsModels.findAll({})
        res.json(getResponse)
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Status Tidak berhasil di post");
    }
}

const getDataTripsById = async (req, res) => {
  try {
    const id = req.params.id
    const getResponse = await tripsModels.findOne({
        where: {
            id: id,
        }
    });
    res.json(getResponse);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Status Tidak berhasil di post");
  }
};
module.exports = {
    postDataTrips,
    getDataTrips,
    getDataTripsById
}
