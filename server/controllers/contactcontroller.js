const ContactModels = require('../models/contact')
const postContact = async (req, res) => {
  try {
    const { firstname, email, typedestination, message } = req.body;

    // Log the received data to verify it's being sent correctly
    console.log("Received data:", { firstname, email, typedestination, message });

    const postResponse = await ContactModels.create({
      firstname,
      email,
      typedestination,
      message,
    });

    // Return success response
    res.json(postResponse);
  } catch (error) {
    // Log the complete error for debugging
    console.error("Error in postContact:", error);

    // Return a more detailed error response
    res.status(400).json({
      message: "Failed to post contact",
      error: error.message,
    });
  }
};

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