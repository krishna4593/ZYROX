import {body, validationResult} from "express-validator"

export const validateRegister=[
    body("email")
         .exists().withMessage("Email is required")
         .isEmail().withMessage("Please enter a valid email")
         .normalizeEmail().bail(),
    body("contact")
         .exists().withMessage("Contact is required")
            .isMobilePhone().withMessage("Please enter a valid contact number").bail(),
    body("fullName")
         .exists().withMessage("Full name is required")
         .isLength({min:3, max:25}).withMessage("Full name must be between 3 and 25 characters").bail(),
    body("password")
         .exists().withMessage("Password is required")
         .isLength({min:6}).withMessage("Password must be at least 6 characters long").bail(),

    (req, res, next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        next();
    }
]