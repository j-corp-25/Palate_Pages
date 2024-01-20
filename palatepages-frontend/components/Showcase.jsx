import React from 'react'

const Showcase = () => {
  return (
    <div className='w-full text-center relative z-1'>
      <div className='absolute w-full h-full bg-black bg-opacity-70'></div>
      <img className='w-full h-60 object-cover ' src='/show.jpg' alt='Showcase' />


      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light-text font-bold text-5xl'>
        Healthy and fun cooking awaits!
      </h1>
    </div>
  );
}

export default Showcase
