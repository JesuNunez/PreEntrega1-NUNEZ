import React from 'react';
import ProductCard from './productcard'; 
import data from '../data.json'; 
import './ItemListContainer.css'

function ItemListContainer() {
    const addToCart = (product) => {
      console.log(`Agregado al carrito: ${product.name}`);
      // Aquí puedes implementar la lógica para agregar el producto al carrito
    };
  
    return (
      <div className="item-list-container">
        {data.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            description={product.description}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    );
  }
  
  export default ItemListContainer;
  
