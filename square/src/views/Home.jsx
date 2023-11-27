import React from 'react'
import Header from '../components/Header'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

  return (
    <div>
        <Header/>
        <main className='homeContent'>
            <section>
                <article>
                    <h1>CLOTHING MADE WITH QUALITY.</h1>
                </article>
                <article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                </article>
                <article>
                    <button  onClick={() => navigate("/products")}>To Products</button>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Home