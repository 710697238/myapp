var express = require('express');
var login = express.Router();
var pool = require('./pool.js');


/* GET home page. */
login.post('/', function (req, res ) {
  var username=req.body.username;
  var password=req.body.password;
  var strQue = 'SELECT Password FROM Users WHERE UserID='+username +' LIMIT 1'  
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
              if(password==rows[0].Password){
                //登录成功
                req.session.user = username;
                res.send('20020');
              }else
              res.send('40030');
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
