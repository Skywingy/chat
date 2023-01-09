import React, { useContext } from 'react';
import Add from '../img/add.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
        <div className='chatInfo'>
          <span>Chatting with {data.user?.displayName}</span>
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
