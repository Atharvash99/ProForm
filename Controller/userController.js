const userSchema = require('../Model/userSchema');
const jwt = require("jsonwebtoken");
const signUp = async (req,res) =>{
    const userData = new userSchema(req.body);
    console.log(req.body);
    try{
     const userExist = await userSchema.findOne({user_email: req.body.user_email});
     if(userExist){
        res.status(400).json({message: "user already exist"});
     }
     const addData = await userData.save();
     res.status(200).json({
        status: "registerd successfully",
        message: "Data is added",
        addData
     })
    }catch(error){
        res.status(400).json({status: "eroor"});
    }
}

const login = async (req,res) => {
try{
    const {user_email, user_password} = req.body;
    console.log(req.body);
       
        if(user_email && user_password){
        const user = await userSchema.findOne({user_email: user_email});
        if(user!=null){
          // const isMatch = await comapare(password, user.password);
          // if(user.user_email === user_email){
          if(user.user_email === user_email && user.user_password === user_password){ 
            const token = jwt.sign(
                {userID: user._id},
                process.env.JWT_SECRET_KEY,
                {expiresIn: "30d"}
              );
            res.status(200).json({
                status: "success",
                message: "Login successfully",
                token: token
            })
           }
           res.status(403).json({
            status: "failed",
            message: "email or password is invalid"
           })  
        }res.status(403).json({
            status: "failed",
            message: "user cannnot exist"
        })
        }

    }catch(error){
        res.status(400).json({
            status: error,
            message: "You are not registerd user"
        })
    }
}

module.exports={
    signUp,
    login
};