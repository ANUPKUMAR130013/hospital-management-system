const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token =
      req.headers.authorization.split(" ")[1];

    try {
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      next();
    } catch (error) {
      res.status(401).json({
        message: "Invalid Token"
      });
    }
  } else {
    res.status(401).json({
      message: "No Token"
    });
  }
};

module.exports = protect;