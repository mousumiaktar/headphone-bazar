import React from 'react';

const SingleHeadphone = (props) => {
    const {name, image, id, price} = props.product;
    return (
        <div>
            <img src ={image} alt = ''/>
            <div>
                <p>Name: {name}</p>
                <p>Id: {id}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default SingleHeadphone;