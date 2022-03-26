import React from 'react';
import './Cart.css';
const Cart = (props) => {
    return (
        <div className='cart-area'>
            <img src={props.selectedProduct.image} alt=''/>
            <h4>{props.selectedProduct.name}</h4>
        </div>
    );
};

export default Cart;