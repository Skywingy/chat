import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidevbar = () => {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />
        <Chats />

    </div>
  )
}

export default Sidevbar
