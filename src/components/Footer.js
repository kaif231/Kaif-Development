import React from 'react'
import {Link} from 'react-router-dom'
import './css/Body.css'
import './css/Footer.css'
export default function Footer() {
  return (
    <>
        <div className='Body'>
        <div className='footer'>
          <ul>
            <li><img src="images/logo.png" alt="" className='logo' /></li>
            <li>+91 79000 99869</li>
            <li>kaif25766@gmail.com</li>
            <li id='github'><i className="fa-brands fa-github fa-2xl" ></i></li>
            <li id='twitter'><i className="fa-brands fa-twitter fa-2xl" ></i></li>
            <li id='linkdin'><i className="fa-brands fa-linkedin fa-2xl" ></i></li>
          </ul>
          <hr />
          <div className='right'>
              <ul>
              <li><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/About' className='Link'>About</Link></li>
            <li><Link to='/Techstack' className='Link'>Tech stack</Link></li>
            <li><Link to='/Projects' className='Link'>Projects</Link></li>
            <li><Link to='/Contact' className='Link'>Contact</Link></li>
              </ul>
          </div>
          <div className='left'>
            <p>Designed and built by <span className='colored'> Khan Kaif </span>with <span className='colored'>Love</span> & <span className='colored'>Coffee</span></p>
          </div>
        {/* */}
      </div>
        </div>
    </>
  )
}
