import {  create, propertyValidator } from "../../models/propertyModel.js";

const postPropertyController = async (req, res, next) => {
  const property = req.body;
  const { success, error } = propertyValidator(property, { id: true });
  if (success) {
    try {
      const result = await create(property);
    } catch (error) {
     return  next(error)
      
    }
    
    return res.status(200).json({
      success,
      message: "Salvo com sucesso",
      result,
    });
  }
  return res.status(400).json({
    success,
    message: "Error invalid input ",
    errors: error.flatten().fieldErrors,
  });
};

export default postPropertyController;
