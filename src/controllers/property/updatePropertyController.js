import { update } from "../../models/propertyModel.js";

const putPropertyController = async (req,res) =>{
    const {id} = req.params;
    const property = req.body;
    const propertyData = await update(parseInt(id), property);
    return res.json({
        message: "Imovel alterado com sucesso",
        property: propertyData,
    });
}


export default putPropertyController;