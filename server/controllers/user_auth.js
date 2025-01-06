import user_model from "../modals/user_modal.js";
import { hashPassword } from "../utils/hashPassword.js";
import { genrateToken } from "../utils/token.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const data = await user_model.findOne({
      username,
    });

    if (!data) {
      return res.status(400).send({
        message: "user not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, data.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "password does not match",
      });
    }

    const token = await genrateToken(data);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).send({
      message: "user login successful",
      data,
    });
  } catch (error) {
    res.status(400).send({
      message: "some error ocured",
      error,
    });

    console.log("errte", error);
  }
};

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user_name_exist = await user_model.findOne({ username: username });

    if (user_name_exist) {
      return res.status(400).send({
        message: "user not created",
        error: "user alredy exist",
      });
    }
    const new_user = await user_model.create({
      email,
      username,
      password: await hashPassword(password),
    });
    res.status(200).send({
      message: "user created succefull",
    });
  } catch (error) {
    res.status(400).send({
      message: "some error occured",
      error,
    });
  }
};

export const forgot_password = async (req, res) => {
  const { user_id, password, newpassword } = req.body;

  try {
    const user = await user_model.findOne({ _id: user_id });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "password does not match",
      });
    }

    // hash new password
    const newhashpassword = await hashPassword(newpassword);

    user.password = newhashpassword;
    user.save();
    res.status(200).send({ message: "password change successfully" });
    console.log("user data", user);
  } catch (error) {
    res.status(400).send({ message: "server not responed", error });
  }
};

export const deleteaccount = async (req, res) => {
  try {
    const { user_id } = req.body;

    const deleteUser = await user_model.findByIdAndDelete(user_id);

    if (!deleteUser) {
      return res.status(401).send({ message: "user does not found" });
    }

    res.status(200).send({
      message: "user deleted succefully",
    });
  } catch (error) {
    res.status(401).send({
      message: "some error occured",
      error,
    });
  }
};

export const addfriend = async (req, res) => {
  const { friend_id, _id } = req.body;

  try {
    const result = await user_model.updateOne(
      { _id: friend_id },
      {
        $push: {
          friendlist: {
            friend_id: _id,
          },
        },
      }
    );

    const result1 = await user_model.updateOne(
      { _id },
      {
        $push: {
          friendlist: {
            friend_id: friend_id,
            status: "requested",
          },
        },
      }
    );

    if (result.modifiedCount === 1 && result1.modifiedCount === 1) {
      res.status(200).send({
        message: "request send successfully",
        data: result,
      });
    } else {
      res.status(400).send({
        message: "request not send ",
        data: result,
      });
    }
  } catch (error) {
    res.status(401).send({
      message: "some error occured",
      error,
    });
  }
};

export const accept_friend_request = async (req, res) => {
  const { _id, friend_id } = req.body;

  try {
    const result = await user_model.updateOne(
      { _id, "friendlist.friend_id": friend_id },
      {
        $set: { "friendlist.$.status": "accepted" },
      }
    );

    const update_friend_id = await user_model.updateOne(
      { _id: friend_id },
      {
        $push: {
          friendlist: {
            friend_id: _id,
            status: "accepted",
          },
        },
      }
    );

    if (result.modifiedCount === 1 && update_friend_id.modifiedCount === 1) {
      res.status(200).send({
        message: "friend request accepted",
        data: result,
      });
    } else {
      res.status(401).send({
        message: "not accepted request",
      });
    }
  } catch (error) {
    res.status(401).send({
      message: "some error occured ",
      error,
    });
  }
};

export const checkAuth = async (req, res) => {
  const { user } = req;
  try {
    const data = await user_model.findOne({ _id: user._id }, { password: 0 });
    res.status(200).send({
      message: "data save succefully",
      data,
    });
  } catch (error) {
    res.status(400).send({
      message: "server error",
      error,
    });
  }
};

export const getUserList = async (req, res) => {
  try {
    const userList = await user_model.find({});

    res.status(200).send({
      message: "succefully get all users ",
      data: userList,
    });
  } catch (error) {
    res.status(403).send({
      message: "server error",
      error,
    });
  }
};
