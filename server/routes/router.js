const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'testing router berhasil'
    })

    console.log(message);
    
})

module.exports = router