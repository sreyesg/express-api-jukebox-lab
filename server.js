const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.send.MONGODB_URL)
mongoose.connection.on('Connected', () => {
    console.log(`connected to mongoDB${mongoose.connection.name}`)
})


app.use(express.json())


app.listen(4000, ()=>{
    console.log("the express app is ready!")
})
