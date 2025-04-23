import { update, propertyValidator  } from "../../models/propertyModel.js";

const putPropertyController = async (req,res) =>{
    const {id} = req.params;
    const property = req.body;
    const { success, error } = propertyValidator({...property, id });
    if(success){
        const propertyData = await update(parseInt(id), property);
        return res.json({
            success,
            message: "Imovel alterado com sucesso",
            property: propertyData,
        });
    }
    return res.status(400).json({
        success,
        message: "Error invalid input ",
        errors: error.flatten().fieldErrors,
    });
    
}


export default putPropertyController;