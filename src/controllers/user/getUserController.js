
const getUserController = (req,res) =>{
    const userData ={
        name: "Eduarda Gonçalves",
        email: "ifeduarda.luiz@gmail.com",
        avatar: "https://github.com/edualnd.png",
    }
    return res.json(userData);
}

export default getUserController;