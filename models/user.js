const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre("save", function (next) {
  this.password = bcrypt.hash(this.password, 12);

  next();
});

const UserSchema = model("UserSchema", schema);
module.exports = { UserSchema };
