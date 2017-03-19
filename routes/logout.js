var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    req.session.destroy();
    res.end('20020');
});

module.exports = router;
