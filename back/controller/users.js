const User = require("../db/models/userModel").User;
const users = async (req,res) => {
    try{
        const users = await User.find({});
        res.json({
            users,
            success: true,
            error: false,
            message: 'Users fetched successfully',
        })
    }catch(err){
        res.json({
            error: true,
            message: err.message || 'Server Error',
            success: false,
        })
    }
}

module.exports = users;