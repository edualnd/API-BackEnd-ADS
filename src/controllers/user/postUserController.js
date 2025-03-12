const postUserController = (req,res) =>{
    const userData ={
        message: "Usuario criado com sucesso",
        user: {
            name: "Eduarda Gonçalves",
            email: "ifeduarda.luiz@gmail.com",
            avatar: "https://github.com/edualnd.png",
        },
    }
   return res.json(userData);
}

export default postUserController