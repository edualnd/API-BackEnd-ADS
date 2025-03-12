const patchUserController = (req,res) =>{
    const userData ={
        message: "Usuario atualizado com sucesso",
        user: {
            name: "Eduarda Gonçalves Luiz de Andrade",
            email: "ifeduarda.luiz@gmail.com",
            avatar: "https://github.com/renancavichi.png",
        },
    }
    return res.json(userData);
}
export default patchUserController;