import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

  return (
    <header className='header'>
        <section>
            <img src="./src/assets/Group 1 (1).png" alt="logo" />
        </section>
        <section className='navSection'>
            <nav>
                <ul>
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/about")}>ABOUT</li>
                    <li onClick={() => navigate("/products")}>PRODUCTS</li>
                </ul>
            </nav>
        </section>
    </header>
  )
}

export default Header