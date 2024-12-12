const express = require("express");
const routes = express.Router();
const { login } = require("../controllers/user_auth");

routes.get("/login", login);

module.exports = routes;
