var mysql = require('mysql');
const mysqlConnection = require("../connectionSql");
//const axios = require('axios');

// get post to maderate
exports.getPostToModerate = (req, res, next) => {
  const id = encodeURI(req.params.id);

  var sql = 'SELECT * FROM wall WHERE id= "'+id+'" ';
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      const content = result[0].content //the content of the post we could moderate
      const moderationText = encodeURI(req.body.moderation);

      const newContentModerer = content +'<br/><h6>[MODERATION: '+moderationText+' ]</h6>'; // moderate content
          
          // update the post
      var sqlUdatePost = 'UPDATE wall SET content = "'+newContentModerer+'" WHERE id= "'+id+'" ';   
      mysqlConnection.query(sqlUdatePost, function(err, result) {
        if (err) {
          throw err;
        } else {
          console.log("Ok content mis à jour");
          res.status(200).json(result);  
        }
      });
    }
  });
};

//seen mark on the new user
exports.setupSignup = (req, res, next) => {
  const id = req.params.id;
  var sql = 'UPDATE membre SET admin = 1 WHERE id= "'+id+'" ';    
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};

//seen mark on the new post
exports.setupPost = (req, res, next) => {
  const id = req.params.id;
  var sql = 'UPDATE wall SET admin = 1 WHERE id= "'+id+'" ';   
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};
 
 //delete the post without validated 
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  var sql = 'DELETE FROM wall WHERE id= "'+id+'" ';    
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
}; 

// get all last post
exports.getAllLastPost = (req, res, next) => {
  var sql = 'SELECT * FROM wall WHERE admin= 0 ';    
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};

// get all last signup
exports.getAllLastSignup = (req, res, next) => {
  var sql = 'SELECT * FROM membre WHERE admin= 0 ';   
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};