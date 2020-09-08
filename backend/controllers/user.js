const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
const mysqlConnection = require("../connectionSql");

//users signup
exports.signup = (req, res, next) => {

const pseudo = encodeURI(req.body.pseudo);
const email = encodeURI(req.body.email);
const level = encodeURI(req.body.level);
var sqlMetier = 'SELECT metier FROM user_function WHERE id='+level;  
  mysqlConnection.query(sqlMetier, function(err, data1) {
  const metier = data1[0].metier 
    if (err) {
      throw err;
    } else {
    
      bcrypt.hash(req.body.password, 10, function(err, hash) {
      var sql = "INSERT INTO membre (pseudo, email, password, level, metier,admin) VALUES ('"+pseudo+"','"+email+"','"+hash+"','"+req.body.level+"','"+metier+"',0)";
        mysqlConnection.query(sql, function(err, newdata) {
          if (err) {
           throw err;
          } else {
            res.status(200).json({ id: newdata.insertId});
          }
        });
      });
    }
  })
}

//user connected
exports.login = (req, res, next) => {

  const email = req.body.email;
  const password = req.body.password;
  var sql = 'SELECT * FROM membre WHERE email = "'+email+'" ';
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
      res.status(401).json({ error: 'Utilisateur non trouvé !' });
    } else {  
      bcrypt.compare(password, result[0].password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }

        //token create 
        res.status(200).json({
          userId: result[0].id, 
          userLevel: result[0].level, 
          userPseudo: result[0].pseudo, 
          token: jwt.sign( { userId: result[0].id },
          process.env.SECRET_CLE_TOKEN,{ expiresIn: '24h' }) }); 
      
      })
      .catch(error => res.status(500).json({ error: "<- Erreur 500" }));
    }
  });
}

//display one user (profile)
exports.getOneUser = (req, res, next) => {
  const idUser = encodeURI(req.params.userId);
  var sqlAllFromMembre = 'SELECT * FROM membre WHERE id ='+idUser;  
  var sqlFonctionFromMembre = 'SELECT metier FROM user_function WHERE id= '+sqlAllFromMembre.level
  mysqlConnection.query(sqlAllFromMembre, function(err, result) {
    if (err) {
      throw err;
    } else { 
      res.status(200).json(result);  
    }
  });

}

//delete user and his post
exports.deleteOneUser = (req, res, next) => {
  const idUser = encodeURI(req.params.userId);
     
  var sql = 'DELETE wall, membre FROM membre INNER JOIN wall ON membre.id = wall.userId WHERE membre.id = '+idUser;
  mysqlConnection.query(sql, function(err, result) {
    if (err) {
      throw err;
    } else {
      console.log(result)
      res.status(200).json(result);  
    }
  });
}