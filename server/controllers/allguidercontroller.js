const { where } = require('sequelize');
const AllGuiderModels = require('../models/allguider')

const GetAllGuiderData = async (req, res) => {
    try {
        const GuiderData = await AllGuiderModels.findAll({});
        console.log(GuiderData);
        res.status(200).json({
            message: "data berhasil di fetch",
            data: GuiderData
        });
    } catch (error) {
        console.error("data fetch error:", error.message);
        res.status(500).send("failed to fetch all guider data")
    }
}

const GetFewGuiderData = async (req, res) => {
    try {
        const { nama_pemandu, lokasi_pemandu, peran, nomertelpon, email, bahasa } = req.body;
        const FewDataGuider = await AllGuiderModels.findOne({
            where: {nama_pemandu, lokasi_pemandu, peran, nomertelpon, email}
        });
        if (FewDataGuider) {
            res.status(200).json({
                message: "data found successfully",
                data: FewDataGuider
            })
        } else {
            res.status(404).json({
                message: "data not successfully found"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Failed to fetch data")
    }
}

const GetGuiderDataById = async (req, res)  => {
    try {
        const id = req.params.id
        const IdGuider = await AllGuiderModels.findOne({
            where: {
                id: id
            }
        })
        if (!IdGuider) {
            res.status(404).json({
                message: "not found id Guider",
                data: null
            })
        }
        res.status(200).json({
            message: "data id succesfully fetch",
            data: IdGuider
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Failed to fetch ID")
    }
}

const DeleteIdGuider = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteGuider = await AllGuiderModels.findOne({
            where: {id: id}
        })
        if (!deleteGuider) {
            return res.status(404).json({
                message: "Data Guider Deleted Failed"
            })
        }
        res.status(200).json({
            message: "Data Guider Deleted Successfully"
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Failed to Delete Guider");
    }
} 

module.exports = {
    GetAllGuiderData,
    GetFewGuiderData,
    GetGuiderDataById,
    DeleteIdGuider
}