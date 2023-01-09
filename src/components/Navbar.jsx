import React, { useContext } from 'react';
import Add from '../img/add.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  console.log("hereee---------------------", currentUser.photoURL);
  return (
    <div className='navbar'> 
        <span className='logo1'>Whatever Chat</span>
        <div className='user'>
            <img className='userImg' src={currentUser.photoURL} alt="userAvatar" />
            <span>{currentUser.displayName}</span>
            <button className='logout' onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
