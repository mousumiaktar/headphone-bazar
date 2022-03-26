import React, { useEffect, useState } from 'react';
import SingleHeadphone from '../SingleHeadphone/SingleHeadphone';
import './Headphones.css';
const Headphones = () => {
    const [products, setProducts] = useState([]); 

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    
    return (
        <div className='headphone-container'>
           <div className='product-container'>
            {
                products.map(product => <SingleHeadphone 
                key={product.id}
                product={product}
                ></SingleHeadphone>)
            }
           </div>
           <div className='cart-container'>
               <h1>cart side</h1>
           </div>
        </div>
    );
};

export default Headphones;