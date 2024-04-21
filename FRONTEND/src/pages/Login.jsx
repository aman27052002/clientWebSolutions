import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import {  toast } from 'react-toastify'
const URL = "http://localhost:3000/login"
export const Login =()=> {
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()
  const handleInput =(e)=>{
   let name = e.target.name
   let value = e.target.value

   setUser({
    ...user,
    [name]:value,

   })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    // console.log(user)
   try {
    const response = await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user)
    })
    // console.log("login form",response)
    const responseData = await response.json()
    if(response.ok){
      toast.success("Login successful")
      // console.log("res from server",responseData)
      storeTokenInLS(responseData.token)
      setUser({email:"",password:""})
      navigate('/')
    }
    else{
      toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
      // console.log("invalid credential")
    }
   } catch (error) {
    console.log(error)
   }    
  }
  return (
     <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/login.png" alt="image" width="400" height="500" />
            </div>
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Login Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name='email' required autoComplete="off" value={user.email} onChange={handleInput} placeholder='Enter your email' id="email"/>
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name='password' required autoComplete="off" value={user.password} onChange={handleInput} placeholder='password' id="password"/>
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
     </section>
  )
}