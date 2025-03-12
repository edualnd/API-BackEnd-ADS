const getPropertyController = (req,res) =>{
    const propertyData ={
        bairro:"Indaia",
        cidade:"Caraguatatuba",
        quartos:"4",
        m2: 18,
        banheiros:"2",

    }
     res.json(propertyData);
}

export default getPropertyController