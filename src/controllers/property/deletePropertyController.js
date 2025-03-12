import express from "express";
const deletePropertyController = (req,res) =>{
    const propertyData ={
        message: "Imovel deletado com sucesso",
    }
    return res.json(propertyData);
}
export default deletePropertyController;