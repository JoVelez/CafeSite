// imports
const express = require('express')
const dotenv = require('dotenv').config({path: '../.env'})
const connectDB = require('./config/db')
const cors = require("cors");
const PORT = process.env.PORT || 3001

connectDB()
const app = express()

// cors
app.use(cors({ origin: true , credentials: true })); 

// helps display console.log(req.body)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/posts', require('./controllers/PostControllers'))


// port setup on 3001 app.listen
app.listen(PORT, () => {
    console.log('Listening on port 3001')
})