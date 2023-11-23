import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
 
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            {/* <img src={Logo} alt='logo' className='w-20' /> */}
            <h1 className='font-tertiary text-gradient'>ASWANTH<span className='text-white'> V R </span></h1>
          </a>

          <a>
            <button className='btn btn-sm'>Work With Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
