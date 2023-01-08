import React from 'react';
import Sidevbar from '../components/Sidevbar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
          <Sidevbar />
          <Chat />
      </div>
    </div>
  )
}

export default Home
