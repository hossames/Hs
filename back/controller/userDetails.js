
const User = require("../db/models/userModel").User;
async function userDetailsController(req,res){
    try{
        console.log("userDetailsController",req.userId);
        // fetch user details from database
        const userDetails = await User.findById(req.userId).exec();
        if(!userDetails){
            throw new Error("User not found");
        }
        res.status(200).json({
            message: "User details fetched successfully",
            data:userDetails,
            success:true
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports = userDetailsController;