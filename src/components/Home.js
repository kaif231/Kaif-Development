import React from 'react'
import './css/Home.css'
import Techstack from './Techstack'
import Projects  from './Projects'
import Footer from './Footer'
export default function Home() {
  return (
    <>
        <div className='Body'>
           <div className='home'>
           <p className='p'>Hi 👋,My name is
            <span className='name'> Khan Kaif </span>
            I build things for web</p>
            <img src="images/Me.jpg" alt="" className='meimg'/>
           </div>
        </div>
      <Techstack/>
      <Projects/>
      <Footer/>
    </>

  )
}
