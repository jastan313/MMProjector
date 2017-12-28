var router = require('express').Router();

// Get Specific User
router.route('/').get(function (req, res) {
    res.json([{message: 'hello'}]);
});


// Send Email
router.route('/email').get(function (req, res) {
    res.json([{message: 'hello'}]);
    // TODO
});

module.exports = router;