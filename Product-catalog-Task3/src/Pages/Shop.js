import React from 'react'
import product from '../ProductData'
import Navbar from '../components/Navbar';
import Card from '../components/Card' 
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Shop() {  

  return (
   <div> 
    <Navbar/>
    <section id="Projects"
    class="w-fit mx-6 grid text grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
 {
        product.map((products)=>(
          <Link to={`/product/${products.id-1}`} >
          <Card key={products.id} products={products} />
          </Link>
        ))
      }
    </section>  
   </div>

  )
}

export default Shop