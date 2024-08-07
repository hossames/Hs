require('dotenv').config();
const userModel = require('../db/models/userModel');
const jwt = require("jsonwebtoken")
async function userSignInController(req,res) {
    try{

        const Valid = await userModel.User.findOne(req.body);
        if(!Valid){
            throw new Error('email or password is wrong');
        }else{
            const Token = jwt.sign({
                data: {
                    _id: Valid._id,
                    email: Valid.email
                }
              }, process.env.TOKEN_SECRET_KEY, { expiresIn: 8 * 60 * 60 });  
              res.cookie('token',Token,{httpOnly:true,secure:true}).status(201).json({
                  token:Token,
                  success: true,
                  message: 'login successful'
              });
        }
                
    }catch(err){
        res.status(400).json({
            error:true,
            success: false,
            message: err.message || err
        })
    }
}

module.exports = userSignInController;