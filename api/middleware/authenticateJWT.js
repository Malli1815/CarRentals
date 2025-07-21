const jwt = require('jsonwebtoken');
const jwtSecret = "akfjzs;lkjfd;lkasdjdflkjasdfjadsf";
const cookieParser = require('cookie-parser');


const authenticateJWT = (req,res,next) => {
    const {token} = req.cookies;
    if(token){
        jwt.verify(token, jwtSecret, {},async (err,clientData)=>{
            if(err) throw err;
            req.user = clientData;
            next();
        })
    }else{
        res.json(null);
    }
}

module.exports = authenticateJWT;