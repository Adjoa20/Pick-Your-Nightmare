// DEPENDENCY 
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const reviewController = require('./controllers/review')
const movieController = require('./controllers/movies')
const MONGOURI = process.env.MONGOURI

// DATABASE CONNECTION 
mongoose.connect(MONGOURI + 'review' )
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use('/review', reviewController)
app.use('/movies', movieController)
app.get('/',(req, res) =>{
    res.render('index.ejs')
})

// LISTENTING FOR PORT 
app.listen(3000, ()=> {
    console.log(`listening on port 3000`)
})