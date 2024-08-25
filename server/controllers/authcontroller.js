const userModels = require('../models/usermodels')
const { where } = require('sequelize')
const bcrypt = require('bcryptjs')

const Register = async (req, res) => {
    try {
        const { id_users, username, password, email } = req.body;
        
    } catch (error) {
        console.log(error.message);
        res.status(400).send('Registrasi Tidak berhasil')
    }
}