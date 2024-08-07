const userModel = require('../db/models/userModel');
async function userSignUpController(req,res) {
    try{
        const notValid = await userModel.User.findOne({email:req.body.email});
        if(notValid){
            throw new Error('email not available');
        }
        const user = await new userModel.User(req.body);
        const userData = await user.save();
        res.status(201).json({
            ...userData,
            success: true,
            message: 'User created successfully'
        });
    }catch(err){
        res.json({
            error:true,
            success: false,
            message: err.message || err
        })
    }
}

module.exports = userSignUpController;