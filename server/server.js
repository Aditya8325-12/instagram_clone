import { app, server } from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.port || 8000;

server.listen(port, () => {
  console.log("server will running");
});
