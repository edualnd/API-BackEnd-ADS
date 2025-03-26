import express from "express";
import getPropertyController from "../controllers/property/listPropertyController.js";
import postPropertyController from "../controllers/property/createPropertyController.js";
import deletePropertyController from "../controllers/property/deletePropertyController.js";
import patchPropertyController from "../controllers/property/editPropertyController.js";
import putPropertyController from "../controllers/property/updatePropertyController.js";

const router = express.Router();


router.get("/list", getPropertyController)

router.get("/:id", ()=> {}) //fazer dps

router.post("/", postPropertyController)

router.put("/:id", putPropertyController)

router.delete("/:id", deletePropertyController)

router.patch("/type", patchPropertyController)



export default router