const express = require('express')
const mongoose = require('mongoose')
const pokemonRoutes = require('./routes')


const app = express()

app.use(express.json())
const port = 3000

mongoose.connect('mongodb://localhost:27017');

app.use('/api/', pokemonRoutes)
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })