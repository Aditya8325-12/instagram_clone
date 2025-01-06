import express from "express";
import dotenv from "dotenv";
import mongoose from "./config/mongoose_connection.js";
import user_routes from "./routes/user_auth.js";
import Error_handler from "./middleware/error_handler.js";
import { Server } from "socket.io";
import http from "http";
import { Socket } from "net";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// app.set("io", io);

// io.on("connection", (socket) => {
//   console.log("a user connected ");

//   socket.on("sendMessage", (message) => {
//     console.log("message recieved", message);

//     io.emit("recive message", message);
//   });

//   socket.on("disconnected", () => {
//     console.log("user dissconected");
//   });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/auth", user_routes);
app.use(Error_handler);
export { app, server };
