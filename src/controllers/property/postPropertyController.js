const postPropertyController = (req,res) =>{
    const property = req.body;
    const propertyData ={
        message: "Imovel cadastrado com sucesso",
        bairro: property.bairro,
        cidade: property.cidade,
        quartos: property.quartos,
        m2: property.m2,
        banheiros: property.banheiros,

    }
   return res.json(propertyData);
}

export default postPropertyController