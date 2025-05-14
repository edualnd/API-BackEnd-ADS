import {  create, userValidator } from "../../models/userModel.js";
import bcrypt from "bcrypt";
const signUpController = async (req, res, next) => {
  const user = req.body;
  const { success, error } = userValidator(user, { id: true, avatar: true });
  if (success) {
    try {

        user.pass = await bcrypt.hash(user.pass, 10);
        const result = await create(user);
        return res.status(200).json({
            success,
            message: "Salvo com sucesso",
            result
        });
    } catch (error) {
        if(error?.code === "P2002" && error?.meta?.target == "user_email_key"){
            return res.status(400).json({
                success: false,
                message: "Erro ao cadastrat usuario",
                errors: {
                    email: "Email já cadastrado"
                }
            })
        }
     return  next(error)
      
    }
    
    
  }
  return res.status(400).json({
    success,
    message: "Erro ao cadastrar usuario, verifique os dados",
    errors: error.flatten().fieldErrors,
  });
};

export default signUpController;
