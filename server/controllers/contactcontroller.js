const ContactModels = require('../models/contact')
const postContact = async (req, res) => {
    try {
        const { firstname, email, typedestination, message } = req.body;
        const postResponse = new ContactModels({
            firstname,
            email,
            typedestination,
            message
        })

        await postResponse.save()
        if (!postResponse) res.status(400).json({
            message: 'tidak berhasil post contact'
        })

        res.json(postResponse)
    } catch (error) {
        console.log(error.message);
        res.status(400).send('Failed to post contact')
        
    }
}

const getContact = async (req, res) => {
    try {
        const getResponse = await ContactModels.findAll({})
        res.json(getResponse)
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Failed to post contact"); 
    }
}

module.exports = {
    postContact,
    getContact
}