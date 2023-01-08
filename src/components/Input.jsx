import React from 'react';
import Add from '../img/add.png';

const Input = () => {
  return (
    <div className='input'>
      <input className='input2' type="text" placeholder='Type love...'/>
      <div className='send'>
        <img className='inputImg' src={Add} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor='file'>
          <img className='inputImg' src={Add} alt="" />
        </label>
        <button className='inputButton'>Send</button>
      </div>
    </div>
  )
}

export default Input
