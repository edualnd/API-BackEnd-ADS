import express from "express";
import UserRouter from "./routers/userRouter.js"
import PropertyRouter from "./routers/propertyRouter.js"
import cors from "cors"
import logger from "./middlewares/logger.js";
import AuthRouter from "./routers/authRouter.js"
import errorHandler from "./middlewares/errorsHandler.js";
const app = express();
const port = 3000;

//MIddleWare
app.use(cors()); // libera o cors para o navegador

app.use(express.json());
app.use("/user",UserRouter)
app.use("/property", logger ,PropertyRouter)
app.use("/auth", AuthRouter)

app.get("/", (req, res)=>{
    res.send("Bem-vindo a API");
})

app.use('*', (req, res)=>{
    res.status(404).json({
        message: "Rota não encontrada"
    })
})
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Rodando em http://localhost:${port}`);
})