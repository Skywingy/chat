import React from 'react';
import Add from '../img/add.png';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input className='searchInput' placeholder='Find a user' type="text" />
      </div>
      <div className='userChat'>
        <img src={Add} alt="userChatImg" />
        <div className='userChatInfo'>
          <span className='userChatName'>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
