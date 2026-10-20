import express from "express";
import {validateRegister} from "../validator/auth.validator.js"
import {registerController} from "../controller/auth.controller.js"
const router= express.Router()

router.post("/register", validateRegister,registerController )

export default router