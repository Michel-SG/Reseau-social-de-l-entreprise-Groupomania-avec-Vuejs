const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {  
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET_CLE_TOKEN);  // verify token
    const userId = String(decodedToken.userId); // define userid to use
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({ error: new Error('Invalid request!')});
  }
};