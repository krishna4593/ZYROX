import {registerUser,loginUser} from "../services/auth.api.jsx"
import {useDispatch} from "react-redux"
import {setUser,setLoading,setError} from "../state/auth.slice.jsx"
import {useNavigate} from "react-router"

export const useAuth=()=>{
    const dispatch= useDispatch()
    const navigate=useNavigate()
    const handleRegister=async({email,contact,fullName,password,isSeller})=>{
        try{
            dispatch(setLoading(true))
            const data= await registerUser({email,contact,fullName,password,isSeller})
            dispatch(setUser(data.user))
            navigate("/")
            dispatch(setLoading(false))
        }
        catch(err){
            dispatch(setLoading(false))
            dispatch(setError(err))
        }
    }
    const handleLogin=async({email,password})=>{
        try{
            dispatch(setLoading(true))
            const data= await loginUser({email,password})
            dispatch(setUser(data))
            dispatch(setLoading(false))
        }
        catch(err){
            dispatch(setLoading(false))
            dispatch(setError(err))
        }
    }
    const handleLogout=()=>{
        dispatch(setUser(null))
    }
    return {
        handleRegister,
        handleLogin,
        handleLogout
    }
}