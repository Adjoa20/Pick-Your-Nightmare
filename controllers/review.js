const express = require("express");
const router = express.Router();
const Review = require("../models/review.js");

// ROUTE

// INDEX
router.get("", (req, res) => {
  Review.find({}, (error, allReview) => {
    res.render("index.ejs", {
      review: allReview,
    });
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  Review.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  const category = req.body.category;
  Review.findByIdAndUpdate(req.params.id, req.body, { $set: req.body }, { new: true }, (err, updatedReviews) => {
      res.redirect(`/movies/${category}`);
    }
  );
});

// CREATE
router.post("", (req, res) => {
  const category = req.body.category;
  Review.create(req.body, (error, createdReviews) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.redirect(`/movies/${category}`);
    }
  });
});

// EDIT
router.get("/:id/edit", (req, res) => {
  Review.findById(req.params.id, (err, foundReviews) => {
    res.render("edit.ejs", { movie: foundReview });
  });
});

module.exports = router;
