import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleHeadphone from '../SingleHeadphone/SingleHeadphone';
import './Headphones.css';
const Headphones = () => {
    const [products, setProducts] = useState([]); 
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='headphone-container'>
           <div className='product-container'>
            {
                products.map(product => <SingleHeadphone 
                key={product.id}
                product={product}
                handleAddtoCart = {handleAddtoCart}
                ></SingleHeadphone>)
            }
           </div>
           <div className='cart-container'>
               <div className='cart-info'>
               <h3>Selected Items:</h3>
               {
                cart.map((selectedProduct) => (
                    <Cart key ={selectedProduct.id} selectedProduct={selectedProduct}></Cart>
                ))
               }
               <button>Choose one for headphone</button>
               <button>Choose Again</button>
               </div>
           </div>
        </div>
    );
};

export default Headphones;