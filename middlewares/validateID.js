const { UserSchema } = require("../models/user");

const validateID = async (req, res, next) => {
  try {
    const cat = await UserSchema.findById(req.user.id);
    if (cat !== null) {
      next();
    } else {
      req.status(400).json({
        msg: "El ID" + req.params.id + "ingresado es invalido",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { validateID };
