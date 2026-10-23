import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export const registerUser=async({email,contact,fullName,password,isSeller})=>{
    try{
        const response= await api.post("/register",{
            email,contact,fullName,password,isSeller
        })
        return response.data
    }catch(err){
        console.error(err?.response?.data || "Registration failed")
        throw err
    }
}

export const loginUser=async({email,password})=>{
    try{
        const response= await api.post("/login",{
            email,password
        })
        return response.data
    }
    catch(err){
        console.error(err?.response?.data || "Login failed")
        throw err
    }
}