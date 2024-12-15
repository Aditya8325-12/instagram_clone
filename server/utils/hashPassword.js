import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltrounds = 3;
    const new_password = await bcrypt.hash(password, saltrounds);
    return new_password;
  } catch (error) {
    throw new Error("error while creating the users");
  }
};
