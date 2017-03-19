var express = require('express');
var personDAO = express.Router();
var pool = require('./pool.js');
var sessioncheck = require('./sessioncheck');

/* GET home page. */
personDAO.post('/', function (req, res ) {
  
  if(sessioncheck.check(req, res)){
    var username = req.session.userid;
  }else{
    res.send('50010');
  }

  var strQue = 'SELECT * FROM userinfo WHERE UserID='+username +' LIMIT 1'
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
                res.render('persondoc', { personinfo: rows[0] });
              }   
          }
          connection.release();        
      });
  });
});


personDAO.get('/', function (req, res) {
  res.send('-1');
});

module.exports = personDAO;