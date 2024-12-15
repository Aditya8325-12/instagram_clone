import express from "express";
import dotenv from "dotenv";
import mongoose from "./config/mongoose_connection.js";
import user_routes from "./routes/user_auth.js";
import Error_handler from "./middleware/error_handler.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", user_routes);

// handle request error
app.use(Error_handler);

export default app;
