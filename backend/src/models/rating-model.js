var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Rating Schema
var RatingSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userrating: {type: Number, required: true, default: 5},
    title: {type: String, required: true},
    released: {type: Number, required: true},
    runtime: {type: String, required: true},
    genres: {type: String, required: true},
    director: {type: String, required: true},
    actors: {type: String, required: true},
    plot: {type: String, required: true},
    poster: {type: String, default: 'N/A'},
    imdburl: {type: String, default: 'N/A'},
    imdbrating: {type: String, default: 'N/A'},
    rottentomatoesrating: {type: String, default: 'N/A'},
    metascorerating: {type: String, default: 'N/A'}
});

module.exports = mongoose.model('Rating', RatingSchema);