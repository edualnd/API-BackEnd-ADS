import express from "express";
import {
  deleteProperty,
  propertyValidator,
} from "../../models/propertyModel.js";

const deletePropertyController = async (req, res) => {
  const { id } = req.params;
  const { success, error } = propertyValidator(
    { id },
    {
      type: true,
      property: true,
      address: true,
      rooms: true,
    },
  );

  if (success) {
    const result = await deleteProperty(parseInt(id));
    return res.status(200).json({
      success,
      message: "Imovel deletado com sucesso",
      property: result,
    });
  }

  return res.status(400).json({
    success,
    message: "Error invalid input ",
    errors: error.flatten().fieldErrors,
  });
};
export default deletePropertyController;
