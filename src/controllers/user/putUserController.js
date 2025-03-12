const putUserController = (req,res) =>{
    const userData ={
        message: "Usuario atualizado com sucesso",
        user: {
            name: "Eduarda Gonçalves Luiz de Andrade",
            email: "ifeduarda.luiz@aluno.ifsp.edu.br",
            avatar: "https://github.com/kevin4bmael.png",
        },
    }
    return res.json(userData);
}


export default putUserController;