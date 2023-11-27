import React from 'react'
import Header from '../components/Header'
import './About.css'

function About() {
  return (
    <div>
        <Header/>
        <main className='aboutContent'>
            <section>
                <h2>ABOUT US</h2>
            </section>
            <section>
                <article className='aboutText'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="https://facebook.com">Check out our Facebook!<br></br><br></br><br></br><img src="./src/assets/Vector (8).png" alt="facebook link" /></a>
                </article>
                <article className='video'>
                <video width="640" height="360" controls>
                    <source src="./src/assets/production_id_4620488 (2160p).mp4" type="video/mp4" ></source>
                </video>
                </article>
            </section>
        </main>
    </div>
  )
}

export default About