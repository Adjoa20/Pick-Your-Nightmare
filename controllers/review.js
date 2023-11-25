const express = require('express');
const router = express.Router();
const Review = require('../models/review.js')


// ROUTE

// INDEX
router.get('', (req, res) => {
    Review.find({}, (error, allReview) =>{
        res.render('index.ejs', {
            review: allReview
        })
    })
})

module.exports = router