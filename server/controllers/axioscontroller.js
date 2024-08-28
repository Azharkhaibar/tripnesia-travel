const axios = require('axios')

const fetchingData = async (req, res) => {
    try {
        const getResponse = await axios.get("http://localhost:4000/api/trip");
        console.log(getResponse.data);
        res.status(200).json({
            message: 'data berhasil di fetch',
            data: getResponse.data
        })

    } catch (error) {
        console.log(error.message);
        res.status(400).send('fething destinations data failed')
    }
}

const postContact = async (req, res) => {
    try {
        const postResponse = await axios({
            method: "post",
            url: "http://localhost:4000/api/axios/post",
            data: {
                firstname: req.body.firstname,
                email: req.body.email,
                typedestination: req.body.typedestination,
                message: req.body.message
            },
            timeout: 2000,
        });

        console.log(postResponse.data);
        res.status(200).json({
            message: "data berhasil terkirim",
            data: postResponse.data,
        });
    } catch (error) {
        if (error.code === "ECONNABORTED") {
            console.log("Request timed out");
            res.status(408).send("Request timed out");
        } else {
            console.log(error.message);
            res.status(400).send("Post contact failed");
        }
    }
};


module.exports = {
    fetchingData,
    postContact
}