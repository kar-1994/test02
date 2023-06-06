// const jwt= require("jsonwebtoken");

// exports.validateJwt((req,res,next)=>{

// })

const jwt = require('jsonwebtoken');
exports.validate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({
        status: 'fail',
        message: 'Unauthorized!',
      });
  }
  const token = authHeader.split(' ')[0];
  try {
    const user = jwt.verify(token, 'secretkey');
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
        status: 'fail',
        message: 'Unauthorized!',
      });
  }
};