//require dotenv 
require('dotenv').config()

//set the port
const port = process.env.PORT;

//Set status header
const status_200 = process.env.STATUS_200;
const status_401 = process.env.STATUS_401;

//The database
const tableUser = process.env.TABLE_USER;

//holds token results 
let verifyTokenResult;

//Load libraries
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

//Create server and read fake data
const server = jsonServer.create()
const userdb = JSON.parse(fs.readFileSync(tableUser, 'UTF-8'))

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

//import our auth middleware
const isUserAuthenticated = require('./authMiddleware');

//import our jwt decoder and verifyer
const {createToken, verifyToken} = require('./jwt');

// Check if the user exists in database
function isAuthenticated({username, password}){
  return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
}


// Login to one of the users from ./users.json
server.post('/auth/login',(req, res) => {
  const {username, password} = req.body;
  if (isAuthenticated({username, password}) === false) {
    const message = 'Incorrect username or password';
    res.status(status_401).json({status_401, message})
    return
  }

  //Generate access token
  const access_token = createToken({username, password})
  res.status(status_200).json({access_token})
})

 

//List users details
server.post('/auth/listings', isUserAuthenticated ,(req, res, next) => { 
     try{
        fs.readFile(tableUser, (err, data) => {  
            if (err) {
              res.status(status).json({status_401, err})
              return
            };

            // Get current users data
            var data = JSON.parse(data.toString());
            res.end(JSON.stringify(data)); 
        });
     }catch(err){
         const message = 'Error access token is revoked';
         res.status(status_401).json({status_401, message})
     }
})


//TODO: search by username 
// server.put('/auth/search/:username', isUserAuthenticated ,(req, res, next) => { });
//


//TODO: update user by
// server.post('/auth/update/:id', isUserAuthenticated ,(req, res, next) => { });
//

//Listen to port 8000
server.listen(port, () => {
  console.log('Api running in:', port)
})