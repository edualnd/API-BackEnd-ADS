const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
}

export default errorHandler;