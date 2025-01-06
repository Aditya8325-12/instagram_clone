import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: { type: String, require: true },
    username: { type: String, require: true },
    phone_no: String,
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    token: String,
    friendlist: [
      {
        friend_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
        status: {
          type: String,
          enum: ["pending", "accepted", "blocked"],
          default: "pending",
        },
      },
    ],
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

const user_model = new mongoose.model("user", userSchema);

export default user_model;
