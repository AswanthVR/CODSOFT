import React from 'react';
import { Link, useParams } from 'react-router-dom';
import product from '../ProductData';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';

import toast, { Toast,Toaster } from 'react-hot-toast';

export default function ProductDetail() { 
    const dispatch = useDispatch();
 
    const {productId} = useParams();
    console.log(productId)
    const [data , setData] = React.useState(product[productId])
    const handleAddToCart = () => {
      dispatch(addToCart(data)); 
    };
  return (
    <div>
        
    <Toaster className='w-[600px]'/>
        <Navbar/>
        <section class="overflow-hidden bg-white py-11 font-poppins  bg-gray-800">
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="sticky top-0 z-50 overflow-hidden ">
                        <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src= {data.image} alt=""
                                class="object-contain w-full lg:h-[400px] "/>
                        </div>
                    
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="lg:pl-20">
                        <div class="mb-8 ">
                            <span class="text-lg font-medium text-rose-500  ">{data.brand}</span>
                            <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold  text-black md:text-4xl">
                                {product[productId].name}</h2>
                      

                          
                            <p class="inline-block mb-8 text-4xl font-bold text-gray-700  text-gray-400 ">
                                <span> ₹ {data.price}</span>
                                 </p>
                            <p class="text-green-600   "> In stock</p>
                        </div>
                     
                    
                       
                        <div class="flex flex-wrap items-center -mx-4 ">
                            <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button onClick={handleAddToCart}
                                    class="flex items-center justify-center w-full p-4 text-white border border-yellow-500 rounded-md     border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white  bg-yellow-600  hover:bg-yellow-700  hover:border-yellow-700  hover:text-gray-300">
                                    Add to Cart
                                </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-700  h-[1px] mt-10 ml-5 mr-5'></div>
        <div className='m-10'>
            <h1 className='w-full text-center font-bold text-4xl'>DESCRIPTION</h1>
            
            <div className='m-10'>           
    {data.description.split("\n\n").map((text, index) => (
        <div className=' space-y-3 mb-5'>
           
        <p className='' key={index}>
        {text}</p>
        </div>
      ))}
      </div>

        </div>
    </section>
    </div>
  )
}
