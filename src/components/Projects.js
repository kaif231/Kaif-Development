import React from 'react'
import './css/Body.css'
import './css/Projects.css'
export default function Projects() {
    function mememathsite() {
        window.location.href='https://mememath.in/'
    }
    function mememathcode() {
        window.location.href='https://github.com/kaif231/Mememath'
    }
    function Jokessite() {
        window.location.href='https://kaif231.github.io/Jokes/'
    }
    function jokescode() {
        window.location.href='https://github.com/kaif231/Jokes'
    }
    function musicdrumsite() {
        window.location.href='https://kaif231.github.io/Music-Drum/'
    }
    function musicdrumcode() {
        window.location.href='https://github.com/kaif231/Music-Drum'
    }
    return (
        <>
            <div className='Body'>
            <div className='Projects'>
                <div className='heading'>
                    <h1>Projects</h1>
                    <p className='project-heading'>Things I've built so far</p>
                </div>
                <div className='project-list'>
                    <div className='firstproject'>
                        <div className='img'>
                            <img src="images/Projects/firstP.png" alt="" />
                            <h2>Mememath</h2>
                            <p className='project-description'>This Math Tool helps learning Math with Meme theme for fun.</p>
                            <p className='project-tagline'><strong>Tech stack: </strong>HTML, CSS & JAVASCRIPT</p>
                        </div>
                        <div className='links'>
                            <p className='p-links' onClick={mememathsite}><i className="fa-solid fa-link fa-lg"></i> Live Preview</p>
                            <p className='p-links' onClick={mememathcode}><i className="fa-brands fa-github fa-lg"></i> View Code</p>
                        </div>
                    </div>
                    <div className='secondproject'>
                    <div className='img'>
                            <img src="images/Projects/secondP.png" alt="" />
                            <h2>Jokes</h2>
                            <p className='project-description'>Read multiple funniest jokes, new jokes in every 10 seconds</p>
                            <p className='project-tagline'><strong>Tech stack: </strong>HTML, CSS & JAVASCRIPT</p>
                        </div>
                        <div className='links'>
                            <p className='p-links' onClick={Jokessite}><i className="fa-solid fa-link fa-lg"></i> Live Preview</p>
                            <p className='p-links' onClick={jokescode}><i className="fa-brands fa-github fa-lg"></i> View Code</p>
                        </div>
                    </div>
                    <div className='thirdproject'>
                    <div className='img'>
                            <img src="images/Projects/thirdP.png" alt="" />
                            <h2>Music Drums</h2>
                            <p className='project-description'>Play Music with online Drums, with beats of lyrics &Sings.</p>
                            <p className='project-tagline'><strong>Tech stack: </strong>HTML, CSS & JAVASCRIPT</p>
                        </div>
                        <div className='links'>
                            <p className='p-links' onClick={musicdrumsite}><i className="fa-solid fa-link fa-lg"></i> Live Preview</p>
                            <p className='p-links' onClick={musicdrumcode}><i className="fa-brands fa-github fa-lg"></i> View Code</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
