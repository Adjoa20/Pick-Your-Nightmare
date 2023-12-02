const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true}
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;