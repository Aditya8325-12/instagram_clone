const Error_handler = (err, req, res, next) => {
  res.staus(401).send({ message: err });
};

export default Error_handler;
