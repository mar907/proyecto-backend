const { UserSchema } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  async register(req, res) {
    const user = new UserSchema(req.body);
    await user.save();
    res.status(200).json(user);
  }
  async Login(req, res) {
    const { username, password } = req.body;
    const user = await UserSchema.findOne({ username });

    if (!user) {
      return res.status(404).json("Invalid user or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return res.status(401).json("Invalid user or password");
    }
    const payload = { id: user._id, username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.status(200).json({ token, payload });
  }
}

module.exports = new AuthController();
