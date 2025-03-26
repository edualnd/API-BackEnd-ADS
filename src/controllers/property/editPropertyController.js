const patchPropertyController = (req,res) =>{
    const propertyData ={
        message: "Bairro atualizado com sucesso",
        bairro:"Porto Novo",
        cidade:"Caraguatatuba",
        quartos:"4",
        m2: 18,
        banheiros:"2",

    }
    return res.json(propertyData);
}
export default patchPropertyController;