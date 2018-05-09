var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
    res.send('GET handler for /login route.');
});

router.post('/loginData', function(req, res) {
    res.send('POST handler for /login route.');
});

module.exports = router;
