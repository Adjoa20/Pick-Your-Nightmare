const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {type: String, required: true},
    // attachted to movie, easy to grab in the front end, make it easier to filter out
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie'},
    name: {type: String, required: true},
    category: {type: String, required: true}
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;