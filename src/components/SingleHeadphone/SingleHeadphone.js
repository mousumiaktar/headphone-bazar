import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleHeadphone.css';

const SingleHeadphone = ({product,handleAddtoCart}) => {
    const {name, image, id, price} = product;
    return (
        <div className='product-item'>
            <img src ={image} alt = ''/>
            <div className='product-info'>
                <h4>Name: {name}</h4>
                <p>Id: {id}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddtoCart(product)} className='btn-cart'><p className='btn-text'>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default SingleHeadphone;