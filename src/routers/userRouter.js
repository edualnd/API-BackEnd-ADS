import express from "express";
import getUserController from "../controllers/user/getUserController.js";
import postUserController from "../controllers/user/postUserController.js";
import deleteUserController from "../controllers/user/deleteUserController.js";
import patchUserController from "../controllers/user/patchUserController.js";
import putUserController from "../controllers/user/putUserController.js";
const router = express.Router();


router.get("/", getUserController)

router.post("/criar", postUserController)

router.delete("/delete", deleteUserController)

router.patch("/avatar",patchUserController)

router.put("/atualizar", putUserController)

export default router