const logger = async (req, res, next) => {
    console.log(req.body);
    
  next();
};

export default logger;
