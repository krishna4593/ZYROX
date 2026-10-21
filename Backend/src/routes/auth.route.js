import express from "express";
import {validateRegister, validateLogin} from "../validator/auth.validator.js"
import {registerController, loginController} from "../controller/auth.controller.js"
const router= express.Router()

router.post("/register", validateRegister,registerController )
router.post("/login",validateLogin, loginController)    

export default router