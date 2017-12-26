var router = require('express').Router();

// Get Specific User
router.route('/').get(function (req, res) {
    res.json([{message: 'hello'}]);
});

module.exports = router;