import express from "express";
const router = express.Router();


router.get("/", (req, res)=>{
    const userData ={
        name: "Eduarda Gonçalves",
        email: "ifeduarda.luiz@gmail.com",
        avatar: "https://github.com/edualnd.png",
    }
    res.json(userData);
})


router.post("/", (req, res)=>{
    const userData ={
        message: "Usuario criado com sucesso",
        user: {
            name: "Eduarda Gonçalves",
            email: "ifeduarda.luiz@gmail.com",
            avatar: "https://github.com/edualnd.png",
        },
    }
    res.json(userData);
})

router.delete("/", (req, res)=>{
    const userData ={
        message: "Usuario deletado com sucesso",   
    }
    res.json(userData);
})

router.patch("/avatar", (req, res)=>{
    const userData ={
        message: "Usuario atualizado com sucesso",
        user: {
            name: "Eduarda Gonçalves Luiz de Andrade",
            email: "ifeduarda.luiz@gmail.com",
            avatar: "https://github.com/renancavichi.png",
        },
    }
    res.json(userData);
})

router.put("/", (req, res)=>{
    const userData ={
        message: "Usuario atualizado com sucesso",
        user: {
            name: "Eduarda Gonçalves Luiz de Andrade",
            email: "ifeduarda.luiz@aluno.ifsp.edu.br",
            avatar: "https://github.com/kevin4bmael.png",
        },
    }
    res.json(userData);
})

export default router