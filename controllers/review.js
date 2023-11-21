const express = require('express');
const router = express.Router();
const Review = require('../models/review.js')

// ROUTES (I.N.D.U.C.E.S)

// INDEX
router.get('', (req, res) => {
    Review.find({}, (error, allReview) =>{
        res.render('index.ejs', {
            review: allReview
        })
    })
})

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT 

// SHOW 

module.exports = router