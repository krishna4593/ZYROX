import dotenv from "dotenv";
dotenv.config()

if(!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    console.error("Missing required environment variables. Please check your .env file.")
    process.exit(1)
}

 const  config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/zyrox",
    JWT_SECRET: process.env.JWT_SECRET 
}

export default config