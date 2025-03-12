const putPropertyController = (req,res) =>{
    const propertyData ={
        message: "Imovel atualizado com sucesso",
        bairro:"Jaraguá",
        cidade:"São Sebastião",
        quartos:"3",
        m2: 20,
        banheiros:"3",

    }
    return res.json(propertyData);
}


export default putPropertyController;