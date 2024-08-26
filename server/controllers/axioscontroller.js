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

module.exports = {
    fetchingData
}