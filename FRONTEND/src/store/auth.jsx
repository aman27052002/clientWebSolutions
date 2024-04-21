import { createContext,useContext,useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

  const[token,setToken] = useState(localStorage.getItem("token"))
  const[user,setUser] = useState("")
  const storeTokenInLS = (serverToken)=>{
    setToken(serverToken)
    return localStorage.setItem("token",serverToken)
    
  }
  
  let isLoggedIn = !!token
  // logout f()
  const LogoutUser = ()=>{
    setToken("")
    return localStorage.removeItem("token")
  }
  const userAuthentication = async()=>{
    try {
      const response = await fetch("http://localhost:3000/user",{
        method:"GET",
        headers:{
          Authorization:`Bearer ${token}`,
        }
      })
      if(response.ok){
        const data = await response.json()
        // console.log("user data",data.userData)
        setUser(data.userData)
      }
    } catch (error) {
      console.log("Error in fetching user data")
    }
  }
  const[services,setServices] = useState([])
  const getService = async ()=>{
    try {
      const response = await fetch("http://localhost:3000/service",{
        method:"GET",
      })
      if(response.ok){
        const data = await response.json()
        // console.log("data from auth side",data.msg)
        setServices(data.msg)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getService()
    userAuthentication()
  },[])
  return (
  <AuthContext.Provider 
  value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services}}>
  {children}
  </AuthContext.Provider>
  )
}
export const  useAuth = () =>{
  const authContextValue =  useContext(AuthContext)
  if(!authContextValue){
    throw new Error("useAuth used outside of the Provider")
  }
  return authContextValue
}