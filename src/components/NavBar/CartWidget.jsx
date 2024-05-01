import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'; 

function CartWidget() {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} /> 
            <span className="cart-badge">5</span> 
        </div>
    );
}

export default CartWidget;