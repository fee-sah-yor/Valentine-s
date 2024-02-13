import React from 'react'

const Yes = () => {
   // ========for whatsapp link
   const senderPhoneNumber = "2348136290820";
  const handleBtnClick = () => {
    const whatsappLink = `https://wa.me/${senderPhoneNumber}`;
    window.location.href = whatsappLink;
  }
  return (
    <div className='yesCont'>
    <div className='yesBox'>

      {/* ===============GIF========== */}
      <div className='yesImgDiv'>
        <img src='https://media.giphy.com/media/QutcJFD0eBHKIVcAW8/giphy.gif' alt='my cute loml' className=''/>
      </div>

{/* =======link to senders contact======== */}
    <button onClick={handleBtnClick}>
      Text me
    </button>
    </div>
  </div>
  )
}

export default Yes