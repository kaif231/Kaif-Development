import React from 'react'
import './css/Contact.css'
export default function Contact() {
    function facebook() {
        window.location.href='https://www.facebook.com/khankaif.khankaif.3'
    }
    //
    function twitter() {
        window.location.href='https://twitter.com/KhanKai53141555'
    }
    //
    function instagram() {
        window.location.href='https://www.instagram.com/internet_developer______/'
    }
    //
    function linkdin() {
        window.location.href='https://www.linkedin.com/in/kaif-khan-936754189/'
    }
    //
    function github() {
        window.location.href='https://github.com/kaif231'
    }
  return (
    <>
            <div className='Body'>
            <h1>Contact me:</h1>
            <ul className='ulc'>
                <li className='lic'>Phone Number: <span className='info'><strong>7900099869</strong></span></li>
                <li className='lic'>Email: <span className='info'><strong>kaif25766@gmail.com</strong></span></li>
                <li className='lic'>Social Media: <span><i class="fa-brands fa-square-facebook fa-lg" onClick={facebook} id='f'></i> <i class="fa-brands fa-twitter fa-lg" onClick={twitter} id='t'></i> <i class="fa-brands fa-instagram fa-lg" onClick={instagram} id='I'></i> <i class="fa-brands fa-linkedin fa-lg" onClick={linkdin} id='l'></i> <i class="fa-brands fa-github fa-lg" onClick={github} id='g'></i></span></li>
            </ul>
            <hr />
            <p>Contact For <span className='freelance'>Freelance</span> Work, Rapid &Accurate Delivery Of Project.</p>
            </div>
    </>
  )
}
