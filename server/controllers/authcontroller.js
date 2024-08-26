const userModels = require("../models/usermodels");
const bcrypt = require("bcryptjs");
const Validate = require("../middleware/validation");

const Register = async (req, res) => {
    try {
        const { id_user, username, password, email } = req.body;
        const { error } = Validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const existingUser = await userModels.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email sudah terdaftar" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModels.create({
            id_user,
            username,
            password: hashedPassword,
            email,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Registrasi tidak berhasil");
    }
};

const getRegisterData = async (req, res) => {
    try {
        const response = await userModels.findAll({});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Fetch data register tidak berhasil");
    }
};

const getRegisterDataById = async (req, res) => {
    try {
        const id_user = req.params.id;
        const responseId = await userModels.findOne({ where: { id_user } });
        if (!responseId) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
        res.status(200).json(responseId);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(`Fetch data ${id_user} tidak berhasil`);
    }
};

const UpdateRegisterData = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const id_user = req.params.id;

        const existingUser = await userModels.findOne({ where: { id_user } });
        if (!existingUser) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await userModels.update(
            {
                username,
                password: hashedPassword,
                email,
            },
            {
                where: { id_user },
            }
        );

        res.status(200).json({
            message: "Data register berhasil di-update",
            response,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send(`Update data ${id_user} tidak berhasil`);
    }
};

module.exports = {
    Register,
    getRegisterData,
    getRegisterDataById,
    UpdateRegisterData,
};
