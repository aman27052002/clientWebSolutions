import { useState } from 'react'
import {useAuth} from '../store/auth'
import {  toast } from 'react-toastify'

const defaultContactFormData = {
  username:"",
  email:"",
  message:"",
}
const URL = "http://localhost:3000/contact"
export const Contact =()=> {
  const [contact,setContact] = useState(defaultContactFormData)
  
  const {userData,setUserData} = useState(true)
  
  const {user} = useAuth()
  // console.log(user.username)
  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false)
  }
  const handleInput =(e)=>{
   let name = e.target.name
   let value = e.target.value
  
   setContact({
    ...contact,
    [name]:value,
   })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    // console.log(contact)
    try {
      const response = await fetch("http://localhost:3000/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact)
      })
      if(response.ok){
        setContact(defaultContactFormData)
        const data = await response.json()
        // console.log(data)
        toast.success("Message send successfully")
      }
    } catch (error) {
      toast.error("Message not send")
      console.log(error)
    }
  }
  return (
    <section  className="section-contact">
        <div  className="contact-content container">
          <h1 className='main-heading '>Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img src="/images/support.png" alt="image" width="400" height="500" />
          </div>

          <section className='section-form'>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={contact.username} onChange={handleInput} id="username" autoComplete='off' required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={contact.email} onChange={handleInput} id="email" autoComplete='off' required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" value={contact.message} onChange={handleInput} id="message" cols="30" rows="6"></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.069778968051!2d77.08250009135347!3d28.718503311595992
        !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06ba10ed8d25%3A0x87d38aac184a570d!2sBudh%20Vihar%20Phase%20I
        I%2C%20Budh%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713011852890!5m2!1sen!2sin" width="100%" height="300"  
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </section>
  )
}