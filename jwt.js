const jwt = require('jsonwebtoken')

//Define constants
const SECRET_KEY = process.env.JWT_SECRET
const EXPIRES = process.env.JWT_EXPIRES

// Create a token from a payload 
const createToken = (payload) => {
  const expiresIn = EXPIRES
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
const verifyToken = (token) => {
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

module.exports = {createToken, verifyToken}