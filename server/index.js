const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 4001

app.use(cors())
const getRouter = require('../server/routes/router')

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use('/api', getRouter)

app.listen(PORT, ()=> {
    console.log('SERVER CONNECTED');
})
