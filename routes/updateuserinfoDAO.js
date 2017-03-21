var express = require('express');
var searchuserinfo = express.Router();
var pool = require('./pool.js');


/* GET home page. */
searchuserinfo.post('/', function (req, res ) {
  var userid=req.body.userid;
  var username=req.body.username;
  var userage=req.body.userage;
  var userdep=req.body.userdep;
  var userjob=req.body.userjob;
  var useronjob=req.body.useronjob;
  var type=req.body.type;
  var strQue = '';
  if(type=='userinfo'){
    strQue = 'UPDATE userinfo SET name=\'' + username + '\', age='+ userage +  ', dep=\'' + userdep + '\', job=\'' + userjob + '\', onjob='+ useronjob + ' WHERE (UserID=' + userid +')'
  }
  console.log(strQue)
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
                res.send('20020');
              }      
              
          }
          connection.release();        
      });
  });
});


module.exports = searchuserinfo;