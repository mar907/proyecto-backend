const express = require("express");
const logger = require("morgan");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

const indexRouter = require("./routers/index");
const apiRouter = require("./routers/api");
const authRoutter = require("./routers/authRoutter");
const { connect } = require("./db/db");

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/auth", authRoutter);
connect();

module.exports = app;
