import React from 'react';

import {BiHome , BiHomeAlt, BiUser} from 'react-icons/bi'
import {Link} from 'react-scroll'
import {BsClipboardData , Bsbrief , BsChatSquare, BsBriefcase} from 'react-icons/bs'

const Nav = () => {


  return( 
  
 <nav className='fixed bottom-2 mg:bottom-8 w-full overflow-hoddeen z-50'>
    <div className='container mx-auto'>

<div className='w-full bg-black/20 h-[70px] backdrop-blur
rounded-full max-w-[460px] mx-auto px-5 flex  justify-between text-2xltext-white/50 items-center' >

    <Link to='home'  
    activeClass='active'
    smooth={true}
    spy={true}
    offset={-120}

     className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
      <BiHomeAlt/>
    </Link>

    <Link to='about'
    activeClass='active'
    smooth={true}
    spy={true}
      className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
      <BiUser/>
    </Link>

    <Link  to='skills'
   activeClass='active'
   smooth={true}
   spy={true} 
   className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
      <BsClipboardData/>
    </Link>
 
    <Link  to='work'
    activeClass='active'
    smooth={true}
    spy={true}
    className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
      <BsBriefcase/>
    </Link>
    <Link  to='contact'
   activeClass='active'
   smooth={true}
   spy={true}
   className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
      <BsChatSquare/>
    </Link>

</div>
  </div>
 </nav>
  
  );
};

export default Nav;
