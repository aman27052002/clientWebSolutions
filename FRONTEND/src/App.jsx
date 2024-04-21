import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import  {Home} from "./pages/Home"
import  {About} from "./pages/About"
import { Register } from './pages/Register'; // Adjust the path accordingly
import  {Login}  from "./pages/Login"
import  {Service}  from "./pages/Service"
import {Contact} from "./pages/Contact"
import {Error} from "./pages/Error"
import { Logout } from './pages/Logout';
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/registration" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>  
    </div>
  )
}

export default App

