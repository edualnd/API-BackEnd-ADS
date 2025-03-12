import express from "express";
const router = express.Router();


router.get("/01", (req, res)=>{
    const propertyData ={
        bairro:"Indaia",
        cidade:"Caraguatatuba",
        quartos:"4",
        m2: 18,
        banheiros:"2",

    }
    res.json(propertyData);
})


router.post("/cadastrar", (req, res)=>{
    const propertyData ={
        message: "Imovel cadastrado com sucesso",
        bairro:"Indaia",
        cidade:"Caraguatatuba",
        quartos:"4",
        m2: 18,
        banheiros:"2",

    }
    res.json(propertyData);
})

router.delete("/delete", (req, res)=>{
    const propertyData ={
        message: "Imovel deletado com sucesso",
    }
    res.json(propertyData);
})

router.patch("/bairro", (req, res)=>{
    const propertyData ={
        message: "Bairro atualizado com sucesso",
        bairro:"Porto Novo",
        cidade:"Caraguatatuba",
        quartos:"4",
        m2: 18,
        banheiros:"2",

    }
    res.json(propertyData);
})

router.put("/update", (req, res)=>{
    const propertyData ={
        message: "Imovel atualizado com sucesso",
        bairro:"Jaraguá",
        cidade:"São Sebastião",
        quartos:"3",
        m2: 20,
        banheiros:"3",

    }
    res.json(propertyData);
})

export default router