import express from "express";
import getPropertyController from "../controllers/property/getPropertyController.js";
import postPropertyController from "../controllers/property/postPropertyController.js";
import deletePropertyController from "../controllers/property/deletePropertyController.js";
import patchPropertyController from "../controllers/property/patchPropertyController.js";
import putPropertyController from "../controllers/property/putPropertyController.js";
const router = express.Router();


router.get("/", getPropertyController)

router.post("/cadastrar", postPropertyController)

router.delete("/delete", deletePropertyController)

router.patch("/bairro", patchPropertyController)

router.put("/update", putPropertyController)

export default router