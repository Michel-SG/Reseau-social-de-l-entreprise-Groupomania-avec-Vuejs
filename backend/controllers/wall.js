var mysql = require('mysql');
const mysqlConnection = require("../connectionSql");

// display all the content on the wall
exports.getAllTheWall = (req, res, next) => {
    var sql = 'SELECT * FROM wall ORDER BY id DESC'; 
    mysqlConnection.query(sql, function(err, result) {
        if (err) {
        throw err;
        } else {
        res.status(200).json(result);  
        }
    });
};

// display new post
exports.newPost = (req, res, next) => {
  const title =   encodeURI(req.body.title);
  const content = encodeURI(req.body.content);
  const userId = req.body.userId;
  const imageUrl = req.body.imageUrl;

  var sqlPseudo = 'SELECT pseudo FROM membre WHERE id='+userId;  
    mysqlConnection.query(sqlPseudo, function(err, result1) {
        const pseudo = result1[0].pseudo 
        if (err) {
        throw err;
        } else { 
            var insertPost = "INSERT INTO wall (userId, userPseudo, title, content, urlImage, admin) VALUES ('"+userId+"','"+pseudo+"','"+title+"','"+content+"','"+imageUrl+"',0)";
            mysqlConnection.query(insertPost, function(err, result) {
                if (err) {
                throw err;
                } else {                
                res.status(200).json({id: result.insertId});
                }
            });
        }
    })
};