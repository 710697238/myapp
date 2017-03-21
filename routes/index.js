var express = require('express');
var router = express.Router();
var sessioncheck = require('./sessioncheck');


/* post home page. */
router.post('/', function(req, res, next) {

    var settitle = ''
    console.log(req.session.user)
		//解析cookie获取cookieUser，略去
		if(req.session && req.session.user){
			settitle = req.session.user;
      res.render('index', { title: settitle });
		}
    else {
			res.clearCookie("user",{});
      res.redirect('/login');
		}
  
});

router.get('/', function(req, res, next) {
    var settitle = ''
    console.log(req.session.user)
		//解析cookie获取cookieUser，略去
		if(sessioncheck.check(req, res)){
			settitle = req.session.user;
      var roleid = req.session.roleid;
      res.render('index', { title: settitle, roleid: roleid });
		}
    else {
			res.clearCookie("user",{});
      res.redirect('/login');
		}
});


express().use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;
