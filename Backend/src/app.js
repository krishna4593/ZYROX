import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
 
const app = express()
// Middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))


// Routes
app.use("/api/auth", authRoutes)

export default app