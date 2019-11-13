const fs = require('fs')
const jwt = require('jsonwebtoken')
const userDb = JSON.parse(fs.readFileSync('./backend/db.json', 'UTF-8'))
const SECRET_KEY = require('./secret')
const expiresIn = '1h'

function verifyToken(token){
    return jwt.verify(token, SECRET_KEY, (err,decode) => decode != undefined? decode:err)
}

function isAuthenticated({username, password}){
    return userDb.users.findIndex(user => user.username === username && user.password === password) !== -1
}

function createToken(payLoad){
    return jwt.sign(payLoad, SECRET_KEY, {expiresIn})
}

module.exports = {
    verifyToken,
    isAuthenticated,
    createToken
}