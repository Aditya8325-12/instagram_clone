import express from "express";
const user_routes = express.Router();
import user_auth from "../middleware/userAuth.js";
import {
  login,
  register,
  forgot_password,
  deleteaccount,
  addfriend,
  accept_friend_request,
  checkAuth,
  getUserList,
} from "../controllers/user_auth.js";

user_routes.post("/login", login);
user_routes.post("/register", register);
user_routes.post("/forgtPassword", forgot_password);
user_routes.delete("/deleteaccount", deleteaccount);
user_routes.post("/addfriend", addfriend);
user_routes.post("/acceptrequest", accept_friend_request);
user_routes.get("/checkAuth", user_auth, checkAuth);
user_routes.get("/getuserlist", user_auth, getUserList);

export default user_routes;
