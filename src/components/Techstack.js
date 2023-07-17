import React from 'react'
import './css/Body.css'
import './css/Techstack.css'
export default function Techstack() {
  return (
    <>
      <div className='Body'>
      <div className='techstack'>
                <h1>My Tech Stack</h1>
                <p>Technologies I've been working with recently</p>
                <div className='TechStackImages'>
                    <img src="images/Techstack/html.png" alt="" className='TechImage'/>
                    <img src="images/Techstack/css.png" alt=""  className='TechImage'/>
                    <img src="images/Techstack/js.png" alt=""  className='TechImage'/>
                    <img src="images/Techstack/react.png" alt=""  className='TechImage'/>
                    <img src="images/Techstack/githubT.png" alt=""  className='TechImage'/>
                    <img src="images/Techstack/bootstrap.png" alt=""  className='TechImage'/>
                    <img src="images/Techstack/vs.png" alt=""  className='TechImage'/>
                </div>
      </div>
      </div>
    </>
  )
}
