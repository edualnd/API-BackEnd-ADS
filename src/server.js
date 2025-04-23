import express from "express";
import UserRouter from "./routers/userRouter.js"
import PropertyRouter from "./routers/propertyRouter.js"
import cors from "cors"
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Rodando em http://localhost:${port}`);
})


//MIddleWare
app.use(cors()); // libera o cors para o navegador

app.use(express.json());

app.use("/user",UserRouter)
app.use("/property",PropertyRouter)


app.get("/", (req, res)=>{
    res.send("Bem-vindo a API");
})

/*
    Rede social de esportes litoral de sao paulo


    -   CRUD - User
    -   CRUD - 

    -   CRUD - Atividades
    -   CRUD - Post "evento"

    -   CRUD - Comentario
    -   CRUD - Avaliação

    n-logado

    /
    /user

----------------------------------
    common/professional

    user/Post-evento
    user/Comentario
    user/Group
    user/Avaliação

----------------------------------
    professional *Repensar*
    user/professional/Atividades
*/