const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const PRIVATE_kEY = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Not authentificated",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, PRIVATE_kEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        error: "not authorized",
      });
    }
    req.user = decoded;

    next();
  });
}

module.exports = { auth };
