import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const sendToken= ( res, user, message)=>{
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
    res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
});
    res.status(201).json({
        success: true,
        message,
        token,
        user:{
            id: user._id,
            email: user.email,
            contact: user.contact,
            fullName: user.fullName,
            role: user.role
        }
    })
}

export const registerController =async (req, res) => {
const { email, contact, fullName, password } = req.body;
if (!email || !contact || !fullName || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const userExists = await userModel.findOne({  $or: [{ email }, { contact }]});
  if(userExists){
    return res.status(400).json({ message: "User already exists" });
  }
  const user= await userModel.create({ email, contact, fullName, password });
 sendToken(res, user, "User registered successfully");

}