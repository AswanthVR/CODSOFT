import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux';
import { logout } from '../features/User';
import { useNavigate } from 'react-router-dom';
import Cart from "./Cart";
const Navbar = () => {
  const user = useSelector((state)=> state.user.value)
  

  const Dispatch = useDispatch();
   
  
  
  return (
    <nav className=" drop-shadow-xl shadow-xl bg-black" >
    {/* <nav className="bg-gray-100 drop-shadow-xl"> */}
      <div className="ml-[20px] max-w-7xl px-2 sm:px-6 lg:px-0">
        <div className="relative flex h-20 items-center justify-between">
        
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         
            <div className="flex justify- items-center w-full">
              <h1 className="text-center text-white font-bold text-4xl">
                <Link to={'/'}> Product Catalog </Link></h1>
            </div>
          </div>
          <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
         

            <div className="relative ">
              
              <div className="flex flex-row space-x-10">
                
                
<Link to={'/cart'}>
 <Cart /></Link>
                
                
              </div>


  
  
  </div>
          </div>
        </div>
      </div>

 
    </nav>
  );
};

export default Navbar;
