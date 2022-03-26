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
        let newCart = [];
        const exist = cart.find((item)=>item.id === product.id);
        if(!exist && cart.length < 4) {
             newCart = [...cart, product];
        }
        else{
            alert('not allow more then four items');
            return;
        }
        setCart(newCart);
    }
    const evenHandler = () => {
        let newCart = [];
        setCart(newCart)
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
               <Cart evenHandler={evenHandler} cart = {cart}></Cart>
           </div>
        </div>
    );
};

export default Headphones;