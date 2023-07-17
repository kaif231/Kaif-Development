import React from 'react'
import './css/About.css'
import './css/Body.css'
export default function About() {
  function ibm() {
    window.open('images/About/certificate1.jpg', '_parent')
  }
  function pra() {
    window.open('images/About/certificate2.jpg', '_parent')
  }
  return (
    <>
    <div className='Body'>
    <div id='About'>
          <h1>About</h1>
          <p className='aboutP'>  Learning React app, Intermidate level in javascript. Studies in Mumbai University Criteria, leaves in Mumbai. Graduating in 2024 from B.Com, Experiencd in HTML &CSS.</p>
          <hr />
          <h1>Certification</h1>
          <ul>
            <li className='liC'>IBM Skillbuild (Job Application Essentials) <span className='button' onClick={ibm}><strong>Certificate</strong></span></li>
            <li className='liC'>Pratham Infotech Foundation (Digital Literacy for Employability) <span className='button' onClick={pra}><strong>Certificate</strong></span></li>
          </ul>
          <hr />
          <h1>Education</h1>
            <p className='p1'>Bachelor of Commerce</p>
            <p className='p2'><img src="images/about2.png" alt=""  className='img2'/></p>
            <p className='p3'><i class="fa-regular fa-building fa-lg"></i> Sandesh College</p>
            <p className='p4'><i class="fa-solid fa-calendar-days fa-lg"></i> Aug 2021 - Dec 2024  </p>
        </div>
    </div>
       
    </>
  )
}
