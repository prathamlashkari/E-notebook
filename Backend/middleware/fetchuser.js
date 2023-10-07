const jwt = require('jsonwebtoken');
const Jwt_seceret = "Yashisagoodboy"
const fetchuser =(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).json({error : "Please authenticate using valid credentiatls"})
    }
    try {
        const data = jwt.verify(token ,Jwt_seceret )
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please authenticate using a valid credentiatls"})
    }
}

module.exports = fetchuser;