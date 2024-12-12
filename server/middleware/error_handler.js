const error_handler = (err, req, res, next) => {
  res.staus(401).send({ message: err });
};

module.exports = error_handler;
