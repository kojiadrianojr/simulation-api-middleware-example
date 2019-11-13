//import our jwt decoder and verifyer
const {createToken, verifyToken} = require('./jwt');

//Status 401
const status_401 = process.env.STATUS_401;

//Middleware to validate headers and tokens
const isUserAuthenticated = (req, res, next) => { 
  if (req.headers.authorization === undefined || req.headers.authorization.split(':')[0] !== 'Bearer') {
    const message = 'Error in authorization format';
    res.status(status_401).json({status_401, message})
    return
  }
  try {
     verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

     if (verifyTokenResult instanceof Error) {
       const message = 'Access token not provided';
       res.status(status_401).json({status_401, message})
       return
     }
     next()
  } catch (err) { 
    const message = 'Error access token is revoked';
    res.status(status_401).json({status_401, message})
  }
}

module.exports = isUserAuthenticated

//You can add your custome middlewares here..