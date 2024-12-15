import jwt from "jsonwebtoken";

export const genrateToken = async (user) => {
  try {
    const payload = {
      _id: user._id,
      username: user.username,
      password: user.password,
    };
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "30d" });
  } catch (error) {
    throw new Error("user not created");
  }
};
