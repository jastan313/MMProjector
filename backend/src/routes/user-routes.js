var router = require('express').Router();

// User Schema
var User = require('../models/user-model');

// Get Specific User
router.route('/api/user/:id').get(function (req, res) {
    User.findById(req.params.id, function (err, user) {
        res.json(user);
    });
});

// Create User
router.route('/api/user').post(function (req, res) {
    var user = new User(req.body);
    user.save().then(user => {
        user.populate('ratings').execPopulate().then(user => {
            res.json({
                _id: user._id,
                email: user.email,
                ratings: user.ratings
            });
        }).catch(err => {
            res.status(400).send(err);
        });
    }).catch(err => {
        res.status(400).send(err);
    });
});

// Update Specific User
router.route('/api/user/:id').put(function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (!user)
            return next(new Error('User could not be found.'));
        else {
            user.ratings = req.body.ratings;
            user.save().then(user => {
                user.populate('ratings').execPopulate().then(user => {
                    res.json({
                        _id: user._id,
                        email: user.email,
                        ratings: user.ratings
                    });
                }).catch(err => {
                    res.status(400).send(err);
                });
            }).catch(err => {
                res.status(400).send(err);
            });
        }
    });
});

// Delete Specific
router.route('/api/user/:id').delete(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id},
            function (err, user) {
                if (err)
                    res.json(err);
                else
                    res.json('User {' + user.email + '} deleted');
            });
});

module.exports = router;