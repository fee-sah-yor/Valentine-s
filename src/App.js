import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [stationary, setStationary] = useState({ top: 0, left: 0});

  const psych = () => {
    const randomLeft = Math.random() * (window.innerWidth + 100);
    setStationary({left: randomLeft })
  }
  return (
    <div className='container'>
      <div className='love-box'>

        <h1>Please, be my Valentine!</h1>

        {/* ===============GIF========== */}
        <div className='LOML'>
          <img src='https://media.giphy.com/media/gDfteqLchLcRTtjAD7/giphy.gif' alt='my cute loml' />
        </div>

        {/* =======BUTTONS======= */}
        <div className='button-cont'>
            <button type="submit" id="yes">Yes! I love you too</button>
            <button type="submit" id="no"
            onClick={psych}
             style={{ 
              left: `${stationary.left}px`}}
            >
              No! I'm sorry</button>
        </div>

      </div>
    </div>
  )
}

export default App
