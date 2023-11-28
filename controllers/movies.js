const express = require("express");
const router = express.Router();
const Movie = require("../models/movies.js");
const Review = require("../models/review.js")

// ROUTES (I.N.D.U.C.E.S)

// INDEX // SHOW - Created a dynamic route, all categories will same show route 
router.get('/:category', async (req, res) => {
  const category = req.params.category
  // await to make sure the first result is done before moving on 
  const movies = await Movie.find({category: category})
  Review.find({category: category}, (error, allRecommendedReviews) => {
    res.render('show.ejs', {movies: movies, reviews: allRecommendedReviews, category: category})
  })
})

  

  

module.exports = router
