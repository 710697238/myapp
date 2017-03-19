var express = require('express');
var searchuserinfo = express.Router();
var pool = require('./pool.js');


/* GET home page. */
searchuserinfo.post('/', function (req, res ) {
  var sertype=req.body.sertype;
  var seacontent=req.body.seacontent;
  var strQue = 'SELECT * FROM userinfo WHERE' + ' '+ sertype  + ' '+' =' + ' \''+ seacontent + '\''
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
               res.send('没有查到此人信息');
               
             }else{
              if(rows.length>0){
                //登录成功
                console.log(rows)
                res.render('searchuserinfo', { userinfo: rows });
              }else
              //没有此人
              res.send('没有查到此人信息');
             }       
              
          }
          connection.release();        
      });
  });
});


searchuserinfo.get('/', function (req, res) {
  res.send('-1');
});

module.exports = searchuserinfo;