import user_model from "../modals/user_modal.js";
import { hashPassword } from "../utils/hashPassword.js";
import { genrateToken } from "../utils/token.js";
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const data = await user_model.findOne({ username, password });
    if (!data) {
      res.status(400).send({
        message: "user not found",
      });
    }
    res.status(200).send({
      message: "user login successful",
      data,
    });
  } catch (error) {
    res.status(400).send({
      message: "some error ocured",
      error,
    });
  }
};

export const register = async (req, res) => {
  const { name, email, username, phone_no, password, isAdmin } = req.body;
  try {
    const user_name_exist = await user_model.findOne({ username: username });

    if (user_name_exist) {
      return res.status(400).send({
        message: "user not created",
        error: "user alredy exist",
      });
    }

    const new_user = await user_model.create({
      name,
      email,
      username,
      phone_no,
      isAdmin,
      password: await hashPassword(password),
    });

    const token = await genrateToken(new_user);
    new_user.token = token;
    await new_user.save();

    res.status(200).send({
      message: "user created succefull",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: "some error occured",
      error,
    });
  }
};
