const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

//checking if the authorization value in the headers is there and decoding it if it is
module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if(token){
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) =>{
      if(err){
        res.status(401).json({message: "unable to verfiy token"})
      }
      else{
        req.decodedJwt = decodedToken;
        next();
      }
    })

  }
  else{
    res.status(401).json({message: "token does not exist"});
  }


};
