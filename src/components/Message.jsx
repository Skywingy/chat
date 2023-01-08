import React from 'react';
import Add from '../img/add.png';
import pic from '../img/Profile1.png'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={Add} className='msgImg' alt="" />
        <span>Just now</span>
      </div>
      
      <div className='messageContent '>
        <p className='msg'>Hello</p>
        <img src={pic} className='msgImg2' alt="" />
      </div>
    </div>
  )
}

export default Message
