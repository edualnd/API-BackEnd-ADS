import express from "express";
import signUpController from "../controllers/auth/signUpController.js";

const router = express.Router();


router.post("/signup", signUpController);
router.post("/login", (req, res) => {
  res.send("Login");
})




export default router