import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import Add from '../img/add.png';
import pic from '../img/Profile1.png'

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message]);

  return (
    <div ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className='messageInfo'>
        <img src={
          message.senderId === currentUser.uid 
          ? currentUser.photoURL 
          : data.user.photoURL
          } className='msgImg' alt="" />
        <span>Just now</span>
      </div>
      
      <div className='messageContent '>
        <p className='msg'>{message.text}</p>
        {message.img &&
          <img src={message.img} className='msgImg2' alt="" />}
      </div>

    </div>
  )
}

export default Message
