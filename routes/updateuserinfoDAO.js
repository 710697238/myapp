var express = require('express');
var searchuserinfo = express.Router();
var pool = require('./pool.js');


/* GET home page. */
searchuserinfo.post('/', function (req, res ) {
  
  var username=req.body.username;
  var roleid=req.body.roleid;
  var type=req.body.type;
  var userage=req.body.userage;
  var userdep=req.body.userdep;
  var userjob=req.body.userjob;
  var useronjob=req.body.useronjob;
  var strQue = '';
  if(type=='userinfo'){
    var userid=req.body.userid;
    strQue = 'UPDATE userinfo SET name=\'' + username + '\', age='+ userage +  ', dep=\'' + userdep + '\', job=\'' + userjob + '\', onjob='+ useronjob + ' WHERE (UserID=' + userid +')'
  }
  if(type=='updatauser'){
    var userid=req.body.userid;
    strQue = 'UPDATE users SET UserName=\'' + username + '\', RoleID=\''+ roleid + '\' WHERE (UserID=' + userid +')'
  }
  if(type=='adduser'){  
    var usersex=req.body.usersex;
    strQue = 'INSERT INTO userinfo (name, sex, age, dep, job,onjob) VALUES (\'' + username +'\',\'' + usersex +'\',\'' + userage +'\',\'' + userdep +'\',\'' + userjob +'\',\'' + useronjob+'\')'
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