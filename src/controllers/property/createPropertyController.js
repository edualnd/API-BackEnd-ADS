import { create } from "../../models/propertyModel.js";

const postPropertyController = async (req,res) =>{
    const result = await create(req.body);
    return res.json({
        message: "Salvo com sucesso",
        result,
    });
}

export default postPropertyController