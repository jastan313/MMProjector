var router = require('express').Router();

// Rating Schema
var Rating = require('../models/rating-model');

// Get Specific Rating
router.route('/api/rating/:id').get(function (req, res) {
    Rating.findById(req.params.id, function (err, rating) {
        res.json(rating);
    });
});

// Create Rating
router.route('/api/rating').post(function (req, res) {
    var rating = new Rating(req.body);
    rating.save()
            .then(rating => {
                res.json(rating)
            })
            .catch(err => {
                res.status(400).send(err);
            });
});

// Update Specific Rating
router.route('/api/rating/:id').put(function (req, res) {
    Rating.findById(req.params.id, function (err, rating) {
        if (!rating)
            return next(new Error('Rating could not be found.'));
        else {
            rating.ratings = req.body.ratings;
            rating.save()
                    .then(rating => {
                        res.json(rating)
                    })
                    .catch(err => {
                        res.status(400).send(err);
                    });
        }
    });
});

// Delete Specific
router.route('/api/rating/:id').delete(function (req, res) {
    Rating.findByIdAndRemove({_id: req.params.id},
            function (err, rating) {
                if (err)
                    res.json(err);
                else
                    res.json('Rating {' + rating.email + '} deleted');
            });
});

module.exports = router;