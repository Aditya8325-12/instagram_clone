const express = require("express");
require("dotenv").config();
const user_auth = require("./routes/user_auth");
const mongoose = require("./config/mongoose_connection");

const error_handler = require("./middleware/error_handler");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", user_auth);

// handle request error
app.use(error_handler);
module.exports = app;
