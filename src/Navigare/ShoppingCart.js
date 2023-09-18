// ShoppingCart.js
import React from 'react';


function ShoppingCart({cart}) {
    return (
        <div className="shopping-cart">

            <div className="image-grid">
                {cart.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name}/>
                        <div className="product-info">
                            <p>{product.name}</p>
                            <p>{product.price} lei</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingCart;
