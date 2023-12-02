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
router.delete("/:id", async (req, res) => {
    try {
    const deleteReview = await Review.findByIdAndRemove(req.params.id);
    res.redirect(`/movies/${deleteReview.category}`);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updatedReview = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.redirect(`/movies/${updatedReview.category}`);
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
    res.render("edit.ejs", { review: foundReviews });
  });
});

module.exports = router;
