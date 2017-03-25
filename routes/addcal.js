var redis = require('redis')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var client = redis.createClient()

    client.on("error", function (err) {
        console.log("Error " + err);
    });
  client.incr("online.users")
  console.log(new Date())
  var val = client.get("online.users" , redis.print);
  res.render('edu');
  client.quit();
});

module.exports = router;
