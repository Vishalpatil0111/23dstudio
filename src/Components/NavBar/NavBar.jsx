import React from 'react';

function NavBar(props) {
  const HandleMenu = () => {
    props.setMenu(prev => !prev);
  };

  return (
    <div className='w-full h-15 md:h-20 flex justify-between items-center z-20 
                    px-5 sm:px-10 fixed bg-white/5 
                    border border-white/10 shadow-sm'>
      
      {/* Logo */}
      <div className='sm:w-12 sm:h-12 w-10 h-10'>
        <img srcSet="./images/Logo.png" alt="23Dstudio Logo" className='w-full h-full object-cover' />
      </div>
      
      {/* Menu Button */}
      <button onClick={HandleMenu} 
              className='py-2 px-5  border-3 border-black cursor-pointer'>
      </button>
    </div>
  );
}

export default NavBar;
