import React from 'react'
import { Link } from 'react-router-dom'

const Yes = () => {
  return (
    <div className='yesCont'>
    <div className='yesBox'>

      {/* ===============GIF========== */}
      <div className='yesImgDiv'>
        <img src='https://media.giphy.com/media/QutcJFD0eBHKIVcAW8/giphy.gif' alt='my cute loml' className=''/>
      </div>

{/* =======link to senders contact======== */}
    {/* <Link to = {'./yes'}>
      Text me?
    </Link> */}
    </div>
  </div>
  )
}

export default Yes