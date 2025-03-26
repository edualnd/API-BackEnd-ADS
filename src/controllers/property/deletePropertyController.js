import express from "express";
import { deleteProperty } from "../../models/propertyModel.js";

const deletePropertyController = async (req,res) =>{

    const {id} = req.params;

    const result =  await deleteProperty(parseInt(id));

    const propertyData ={
        message: "Imovel deletado com sucesso",
        property: result,
    }
    return res.json(propertyData);
}
export default deletePropertyController;