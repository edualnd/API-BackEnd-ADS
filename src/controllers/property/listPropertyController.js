import { getList, propertyValidator  } from "../../models/propertyModel.js";

const getPropertyController = async (req,res) =>{
    const propertiesData = await getList(); 
     res.json(propertiesData);
}

export default getPropertyController