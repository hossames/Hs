async function logout (req,res) {
  try{
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'logout successful',
            data: [],
            error:false,
        })
  }catch{
    res.status(400).json({
        success: false,
        message: 'logout failed',
        data: [],
        error:true,
    })
  }
}

module.exports = logout;