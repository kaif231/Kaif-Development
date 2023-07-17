import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'
export default function Home() {
  function githubprofile() {
    window.location.href = 'https://github.com/kaif231'
  }
  function twitterprofile() {
    window.location.href = 'https://twitter.com/home'
  }
  function linkdinprofile() {
    window.location.href = 'https://www.linkedin.com/in/kaif-khan-936754189/'
  }
  function navbar() {
    let Navbar=document.querySelector('.Navbar')
    if(Navbar.style.display==='block'){
      Navbar.style.display='none'
    }else{
      Navbar.style.display='block'
    }
  }
  function li() {
    let Navbar=document.querySelector('.Navbar')
    const mq = window.matchMedia( "(max-width: 560px)" );
    if(mq.matches){
      setTimeout(() => {
        Navbar.style.display='none'
      }, 300);
    }
  }
  return (
    <>
      <div id='humberger'>
        <p><img src="images/logo.png" alt="" /></p>
        <p><i className="fa-solid fa-bars fa-xl" onClick={navbar}></i></p>
      </div>

      <div className='Navbar'>
        <ul>
          <li onClick={li}><img src="images/logo.png" alt="" className='logo' /></li>
          <li onClick={li}><Link to='/' className='Link'>Home <span></span> </Link></li>
          <li onClick={li}><Link to='/About' className='Link'>About</Link></li>
          <li onClick={li}><Link to='/Techstack' className='Link'>Tech stack</Link></li>
          <li onClick={li}><Link to='/Projects' className='Link'>Projects</Link></li>
          <li onClick={li}><Link to='/Contact' className='Link'>Contact</Link></li>
          <li id='github' className='Link, icons'><i className="fa-brands fa-github fa-2xl" onClick={githubprofile}></i></li>
          <li id='twitter' className='Link, icons'><i className="fa-brands fa-twitter fa-2xl" onClick={twitterprofile}></i></li>
          <li id='linkdin' className='Link, icons'><i className="fa-brands fa-linkedin fa-2xl" onClick={linkdinprofile}></i></li>
        </ul>
      </div>
    </>
  )
}
