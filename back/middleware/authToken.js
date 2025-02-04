const jwt = require("jsonwebtoken");
async function authToken(req, res,next) {
  try {

    const token = req.cookies?.token;
    if (!token) {
        return res.status(400).json({
          message: "user not logged in",
          error: true,
          success: false,
        });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      if (err) {
        console.log('error auth')
      }
      req.userId = decoded.data._id;
      next();
    });

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      data: [],
      success: false,
    });
  }
}

module.exports = authToken;
