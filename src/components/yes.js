import React from 'react'
import { Link } from 'react-router-dom'

const Yes = () => {
  return (
    <div className='container'>
    <div className='love-box'>

      {/* ===============GIF========== */}
      <div className='lover-body'>
        <img src='https://media.giphy.com/media/QutcJFD0eBHKIVcAW8/giphy.gif' alt='my cute loml' className='lover'/>
      </div>

      {/* =======BUTTONS======= */}

    <Link to = {'./yes'}>
        {/* https://media.giphy.com/media/kZqbBT64ECtjy/giphy.gif?cid=790b76116a9xtj01kjgh7b7h080kl0jpe6b8w3e60fqpeltg&ep=v1_gifs_search&rid=giphy.gif&ct=g */}
    {/* <div style="width:100%;height:0;padding-bottom:83%;position:relative;"><iframe src="https://giphy.com/embed/hxuykZ07zaO0Nb8yYx" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/turtle-breadtree-btturtle-hxuykZ07zaO0Nb8yYx">via GIPHY</a></p> */}
    </Link>
    </div>
  </div>
  )
}

export default Yes