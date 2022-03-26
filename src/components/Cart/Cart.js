import React, { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Cart.css';
const Cart = ({cart, evenHandler}) => {
    const [getOne, setgetOne] = useState([]);
    const getProduct = (cart) => {
        let getCart = cart[Math.floor(Math.random() * cart.length)];
        setgetOne(getCart)
    }
    return (
        <div className='cart-area'>
            <h3>Selected Products</h3>
            <div>
                {
                    cart.map((singleElement) => (
                        <SingleProduct key={singleElement.id} singleElement={singleElement}></SingleProduct>
                    ))
                }
            </div>
            <button onClick={() => getProduct(cart)}>Choose One for you</button>
            <p>{getOne.name}</p>
            <button onClick={evenHandler}>Choose Again</button>
        </div>
    );
};

export default Cart;