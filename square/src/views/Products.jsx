import React, { useState } from 'react'
import Header from '../components/Header'
import './Products.css'

function Products() {

    const [btnText, setBtnText] = useState("BUY")
    const [btnTextDark, setBtnTextDark] = useState("BUY")
    const [btnTextPurple, setBtnTextPurple] = useState("BUY")

    function handleClick() {
        setBtnText("BOUGHT!")
    }
    function handleClick2() {
        setBtnTextDark("BOUGHT!")
    }
    function handleClick3() {
        setBtnTextPurple("BOUGHT!")
    }

  return (
    <div>
        <Header/>
        <main className='prodContent'>
            <section>
                <h2>PRODUCTS</h2>
            </section>
            <section>
                <article>
                    <img src="./src/assets/Group 3 (2).png" alt="brown hoodie" />
                    <button onClick={handleClick}>{btnText}</button>
                </article>
                <article>
                    <img src="./src/assets/Group 4 (1).png" alt="dark brown hoodie" />
                    <button onClick={handleClick2}>{btnTextDark}</button>
                </article>
                <article>
                    <img src="./src/assets/Group 5 (1).png" alt="purple hoodie" />
                    <button onClick={handleClick3}>{btnTextPurple}</button>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Products