import React from 'react';
import Add from '../img/add.png';

const Navbar = () => {
  return (
    <div className='navbar'> 
        <span className='logo1'>Whatever Chat</span>
        <div className='user'>
            <img className='userImg' src={Add} alt="userAvatar" />
            <span>John</span>
            <button className='logout'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
