
const deleteUserController = (req,res) =>{
    const userData ={
        message: "Usuario deletado com sucesso",   
    }
    return res.json(userData);
}
export default deleteUserController;