// DEPENDENCY 
const express = require('express')
const app = express
const mongoose = require('mongoose')
const methodOverride = require('method-overide')

// DATABASE CONNECTION 
mongoose.connect(MONGOURI + 'nightmare' )
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

// LISTENTING FOR PORT 
app.listen(3000, ()=> {
    console.log(`listening on port 3000`)
})