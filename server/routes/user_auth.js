import express from "express";
const user_routes = express.Router();
import { login, register } from "../controllers/user_auth.js";

user_routes.post("/login", login);
user_routes.post("/register", register);

export default user_routes;
