import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: { type: String, require: true },
    username: { type: String, require: true },
    phone_no: String,
    password: { type: String, require: true },
    isAdmin: Boolean,
    token: String,
  },
  { timestamps: true }
);

const user_model = new mongoose.model("user", userSchema);

export default user_model;
