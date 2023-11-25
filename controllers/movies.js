const express = require("express");
const router = express.Router();
const Movie = require("../models/movies.js");

// ROUTES (I.N.D.U.C.E.S)

// INDEX
router.get("/recommended", (req, res) => {
  Movie.find({ category: 'recommended' }, (error, allRecommendedMovie) => {
    // /movies is the route from the views folder 
    res.render("movies/recommended.ejs", {
      movie: allRecommendedMovie,
    });
  });
});

router.get("/watch", (req, res) => {
    Movie.find({ category: 'watch' }, (error, allWatchMovie) => {
      // /movies is the route from the views folder 
      res.render("movies/watch.ejs", {
        movie: allWatchMovie,
      });
    });
  });

router.get("/dare", (req, res) => {
    Movie.find({ category: 'dare' }, (error, allDareMovie) => {
      // /movies is the route from the views folder 
      res.render("movies/dare.ejs", {
        movie: allDareMovie,
      });
    });
  });

  // NEW 
  router.get('/recommended/new', (req, res) => {
    res.render('new.ejs')
  })

  router.get('/watch/new', (req, res) => {
    res.render('new.ejs')
  })

  router.get('/dare/new', (req, res) => {
    res.render('new.ejs')
  })

  // DELETE

  // UPDATE

  // CREATE

  // EDIT 

  // SHOW
  router.get('/recommended/:id', (req, res) => {
    Movie.findById(req.params.id, (error, allWatchMovie) =>{
      res.render('show.ejs', {
        movie: allWatchMovie,
      })
    })
  })

  router.get('/watch/:id', (req, res) => {
    Movie.findById(req.params.id, (error, allWatchMovie) =>{
      res.render('show.ejs', {
        movie: allWatchMovie,
      })
    })
  })

  router.get('/dare/:id', (req, res) => {
    Movie.findById(req.params.id, (error, allWatchMovie) =>{
      res.render('show.ejs', {
        movie: allWatchMovie,
      })
    })
  })


module.exports = router
