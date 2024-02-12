import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [click, setClick] = useState(false);
  const [display, setDisplay] = useState(0);

  const handleBtnClick = () => {
    setClick(true)
    setDisplay(display === quoteArr.length - 1 ? 0 : display + 1);
  }

  const quoteArr = [
    {
      id: "0",
      quote: "You can't get rid of me easily"
    },
    {
      id: "1",
      quote: "I will stay, I command it!!"
    },
    {
      id: "2",
      quote: "I will stand with you between the heavens and the earth!!"
    },
    {
      id: "3",
      quote: "I have heard that you want me to go"
    },
    {
      id: "4",
      quote: "That you do not wish to see me"
    },

  ]

  return (
    <div className='container'>
      <div className='love-box'>

        {/* =============Header text========= */}
        <h1>Please, be my Valentine!</h1>

        {/* ========  Quote display area=====*/}

        {click && <h2>{quoteArr[display].quote}</h2>}

        {/* ===============GIF========== */}
        <div className='LOML'>
          <img src='https://media.giphy.com/media/gDfteqLchLcRTtjAD7/giphy.gif' alt='my cute loml' className='homeImage'/>
        </div>

        {/* =======BUTTONS======= */}
        <div className='button-cont'>

          <Link type="submit" id="yes" to='/yes'>
            Yes! I love you too
          </Link>

          <button type="submit" id="no" onClick={handleBtnClick}>
            No! I'm sorry</button>
        </div>
      </div>
    </div>
  )
}

export default Home