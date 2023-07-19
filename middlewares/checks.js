const { check } = require("express-validator");

const checks = [
  check("breeds")
    .notEmpty()
    .withMessage("El campo breeds es obligatorio")
    .isString()
    .withMessage("El campo breeds tiene que ser de tipo string"),
  check("categories")
    .notEmpty()
    .withMessage("El campo categories es obligatorio")
    .isString()
    .withMessage("El campo categories tiene que ser de tipo string"),
  check("id")
    .notEmpty()
    .withMessage("El campo id es obligatorio")
    .isString()
    .withMessage("El campo id tiene que ser de tipo string"),
  check("url")
    .notEmpty()
    .withMessage("El campo url es obligatorio")
    .isString()
    .withMessage("El campo url tiene que ser de tipo string"),
  check("message")
    .notEmpty()
    .withMessage("El campo message es obligatorio")
    .isString()
    .withMessage("El campo message tiene que ser de tipo string"),
];

module.exports = checks;
