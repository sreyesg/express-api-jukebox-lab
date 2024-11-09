const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const tracksController = require('./controllers/tracks')


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`connected to mongoDB ${mongoose.connection.name}`)
})


app.use(express.json())
app.use('/tracks', tracksController)




app.listen(3000, ()=>{
    console.log("the express app is ready!")
})
