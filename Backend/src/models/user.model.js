import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:25
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:String,
        enum:["buyer","seller"],
        default:"buyer"
    }
})

userSchema.pre("save", async function(){
    const user = this;
    if(!user.isModified("password")) return;
    user.password = await bcrypt.hash(user.password, 12);
})
userSchema.methods.comparePassword = async function(password){
    const user = this;
    return await bcrypt.compare(password, user.password);
}

const userModel = mongoose.model("User", userSchema);
export default userModel;