import React, { useState } from 'react'

function NavBar(props) {




  const HandleMenu = () => {
    props.setMenu(prev => !prev);

  }
  return (
    <div className='w-full h-15 md:h-20 flex justify-between items-center z-20 py:3 px-5 sm:py-6 sm:px-10 fixed
        bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm'>
      <div className='sm:w-12 sm:h-12 w-10 h-10'>
        <img srcSet="./images/Logo.png" alt="23Dstudio Logo" className='w-full h-full object-cover' />
      </div>
      <button onClick={HandleMenu} className='py-2 cursor-pointer px-6 border-2 border-black'></button>

    </div>
  )
}

export default NavBar
