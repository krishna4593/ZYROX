import mongoose from "mongoose";
import config from "./config.js"

const connectDB = async()=>{
    try{

        await mongoose.connect(config.MONGO_URI)
        console.log("Connected to MongoDB")
    }
    catch(err){
        console.log(err)
    }
}
export default connectDB