const { Schema, model } = require("mongoose");

const schema = new Schema({
  breeds: {
    type: Array,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const CatSchema = model("Cat", schema);
module.exports = { CatSchema };
