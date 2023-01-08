import React from 'react';
import Add from '../img/add.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
          <span>Jane</span>
          <div className='chatIcons'>
            <img className='chatImg' src={Add} alt="" />
            <img className='chatImg'src={Add} alt="" />
            <img className='chatImg' src={Add} alt="" />
          </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat
