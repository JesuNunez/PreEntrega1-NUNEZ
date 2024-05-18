import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryBar from './NavBar/CategoryBar';
import data from '../data.json';
import './ItemListContainer.css'

function ItemListContainer() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const categories = ['All', 'PS4', 'PS1', 'PC'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productToRemove.id));
  };

  const filteredData = selectedCategory === 'All' ? data : data.filter(product => product.description === selectedCategory);

  return (
    <div>
      <CategoryBar categories={categories} onCategoryClick={handleCategoryClick} />
      <div className="item-list-container">
        {filteredData.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <div className="cart-container">
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;