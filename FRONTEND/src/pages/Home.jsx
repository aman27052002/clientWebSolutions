import React from 'react'
import {Analytics} from "../components/Analytics"
export const Home =()=> {
  return (
    <>
   <main>
   <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <p>We are the World Best IT Company</p>
          <h1>Welcome to ClientWebSolutions Limited</h1>
           <p>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Aman Web Solution Limited, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.</p>
           <div className="btn btn-group">
           <a href="/contact">
            <button className="btn"> connect now</button>
           </a>
           <a href="/services">
            <button className="btn secondary-btn"> learn more</button>
           </a>
           </div>
        </div>
        <div className="hero-image">
          <img src="/images/home.png" width="400" height="500" alt="" />
        </div>
      </div>
    </section>
   </main>
   <Analytics/>
   <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-image">
          <img src="/images/home.png" width="400" height="500" alt="" />
        </div>
        <div className="hero-content">
          <p>We are here to help you</p>
          <h1>Get Started Today</h1>
           <p>Ready to take the first step towars a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Thapa Technical can help your business thrive in the digital age.</p>
           <div className="btn btn-group">
           <a href="/contact">
            <button className="btn"> connect now</button>
           </a>
           <a href="/services">
            <button className="btn secondary-btn"> learn more</button>
           </a>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

