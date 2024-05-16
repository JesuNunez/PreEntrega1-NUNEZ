import React from 'react';
import './productcard.css'

function ProductCard({ name, img, price, description, onAddToCart }) {
  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    // Puedes llamar a la función `onAddToCart` pasada como prop desde el componente padre
    if (onAddToCart) {
      onAddToCart({ name, price });
    }
  };

  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-card-img" />
      <div className="product-card-info">
        <h2 className="product-card-name">{name}</h2>
        <p className="product-card-description">{description}</p>
        <p className="product-card-price">${price}</p>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;