var express = require('express');
var login = express.Router();
var pool = require('./pool.js');
var sessioncheck = require('./sessioncheck');
var crypto = require('crypto');

/* GET home page. */
login.post('/', function (req, res ) {
  
  if(sessioncheck.check(req, res)){
    var username = req.session.userid;
  }

  var type = req.body.checkoldpw
  if(type){
    var password= req.body.oldpw
    //对密码md5加密
    var hashpw = crypto.createHash('md5').update(password).digest('hex');
    console.log(hashpw)
    var strQue = 'SELECT * FROM Users WHERE UserID='+username +' LIMIT 1'
    console.log(strQue)
  }else{
    var password= req.body.newpw
    var hashpw = crypto.createHash('md5').update(password).digest('hex');
    console.log(hashpw)
    var strQue = 'UPDATE Users SET Password=\''+ hashpw + '\' WHERE UserID= '+ username
    console.log(strQue)
  }
  
    
  pool.getConnection(function(err, connection) {
      if (err){
          console.log(err.stack);
          res.send('50010');
      }  
      connection.query({
          sql: strQue
      }, function(err, rows, fields) {
          if (err){
              console.log('Error occurs in Tr, ' + err.stack);
          }else{
             if(rows==""){
               res.send('40050');
               
             }else{

              if(!type){
                //修改成功并退出
                req.session.destroy();
                res.send('20020');
              }else{
                    if(hashpw==rows[0].Password){
                    //验证成功
                    res.send('20020');
                }else
                    res.send('40030');
                } 
              }   
          }
          connection.release();        
      });
  });
});


login.get('/', function (req, res) {
  res.send('-1');
});

module.exports = login;
