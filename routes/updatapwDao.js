var express = require('express');
var login = express.Router();
var pool = require('./pool.js');
var sessioncheck = require('./sessioncheck');

/* GET home page. */
login.post('/', function (req, res ) {
  
  if(sessioncheck.check(req, res)){
    var username = req.session.userid;
  }

  var type = req.body.checkoldpw
  if(type){
    var password= req.body.oldpw
    var strQue = 'SELECT * FROM Users WHERE UserID='+username +' LIMIT 1'
    console.log(strQue)
  }else{
    var password= req.body.newpw
    var strQue = 'UPDATE Users SET Password='+ password + ' WHERE UserID= '+ username
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
                req.session.destroy();
                res.send('20020');
              }else{
                    if(password==rows[0].Password){
                    //修改成功
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
