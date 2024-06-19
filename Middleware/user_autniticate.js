const jwt = require('jsonwebtoken');
const User = require('../Model/userSchema');

const checkUserAuth = async (req,res,next) => {
    let token;
    const {authorization} = req.headers;
    if(authorization){
        try{
           token = authorization.split("")[1];
           console.log("token", token);
           console.log("Authorization:", authorization);
           const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY);
           req.user = await User.findById(userID).select("-password");
           next();
        }catch(error){
            console.log(error);
            res.status(401).send({status: "failed", message: "Unauthorized User"})
        }
    }
    if(!token){
        res.status(401)({message: "Unauthorized user no token"})
    }
}