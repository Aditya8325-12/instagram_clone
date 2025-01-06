import jwt from "jsonwebtoken";
const user_auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).send({ message: "token not provide " });
  }
  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verify;
    next();
  } catch (error) {
    res.status(400).send({ message: "server not respond", error });
    console.log("error");
  }
};

export default user_auth;
