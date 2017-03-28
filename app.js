var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var AV = require('leanengine');

var index = require('./routes/index');
var login = require('./routes/login');
var userinfo = require('./routes/userinfo');
var logincheck = require('./routes/logincheck');
var searchuserinfo = require('./routes/searchuserinfo');
var edu = require('./routes/edu');
var updatapassword = require('./routes/updatapassword');
var logout = require('./routes/logout');
var updatapwDao = require('./routes/updatapwDao');
var personDAO = require('./routes/personDAO');
var depmanag = require('./routes/depmanag');
var jobmanag = require('./routes/jobmanag');
var hrsmanag = require('./routes/hrsmanag');
var addhrs = require('./routes/addhrs');
var usermanag = require('./routes/usermanag');
var updatauserinfo = require('./routes/updatauserinfo');
var updateuserinfoDAO = require('./routes/updateuserinfoDAO');
var usermanagDao = require('./routes/usermanagDao');
var updateusermanag = require('./routes/updateusermanag');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'Fw4t2BqVIawHH3yyEHP1bLK5-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'a9B3g3jeB2GJG0rni98s93nH',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'pHHnzEj9IgqOH2bDO9nxdTmo'
});

var app = express();

app.use(AV.express());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "weird sheep",
  resave: false,
  saveUninitialized: true,
  cookie: {user:"default",maxAge: 14*24*60*60*1000}
}));

app.use('/', index);
app.use('/login', login);

//教育培训
app.use('/edu', edu);

//登陆查询
app.use('/logincheck', logincheck);

//个人档案
app.use('/personDAO', personDAO);

//员工信息查询
app.use('/userinfo', userinfo);
app.use('/searchuserinfo', searchuserinfo);


//修改密码
app.use('/updatapassword', updatapassword);
app.use('/updatapwDao', updatapwDao);

//注销用户
app.use('/logout', logout);

//部门管理
app.use('/depmanag', depmanag);

//职务管理
app.use('/jobmanag', jobmanag);

//人事调配
app.use('/hrsmanag', hrsmanag);

//新增员工
app.use('/addhrs', addhrs);

//系统管理
app.use('/usermanag', usermanag);
app.use('/usermanag', usermanag);
app.use('/usermanagDao', usermanagDao);
app.use('/updateusermanag', updateusermanag);

//信息修改页面
app.use('/updatauserinfo', updatauserinfo);
app.use('/updateuserinfoDAO', updateuserinfoDAO);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;