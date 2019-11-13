const auth = require('../auth')

function login(req,res){
    const { username, password } = req.body
    if (auth.isAuthenticated({username, password}) === false){
        const status = 401
        const message = 'Incorrect username or Password'
        res.status(status).json({status,message})
        return
    }
    const access_token = auth.createToken({username,password})
    res.status(200).json({access_token})
}

module.exports = {
    login
}