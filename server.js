// DEPENDENCY 
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const reviewController = require('./controllers/review')
const MONGOURI = process.env.MONGOURI

// DATABASE CONNECTION 
mongoose.connect(MONGOURI + 'review' )
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use('/review', reviewController)

// LISTENTING FOR PORT 
app.listen(3000, ()=> {
    console.log(`listening on port 3000`)
})