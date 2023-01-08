import React from 'react';
import Add from '../img/add.png';

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={Add} alt="userChatImg" />
        <div className='userChatInfo'>
          <span className='userChatName'>Jane</span>
          <p className='userChatLmsg'>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={Add} alt="userChatImg" />
        <div className='userChatInfo'>
          <span className='userChatName'>Jane</span>
          <p className='userChatLmsg'>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={Add} alt="userChatImg" />
        <div className='userChatInfo'>
          <span className='userChatName'>Jane</span>
          <p className='userChatLmsg'>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={Add} alt="userChatImg" />
        <div className='userChatInfo'>
          <span className='userChatName'>Jane</span>
          <p className='userChatLmsg'>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={Add} alt="userChatImg" />
        <div className='userChatInfo'>
          <span className='userChatName'>Jane</span>
          <p className='userChatLmsg'>Hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chats
