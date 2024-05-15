import './NavBar.css';
import React, { useState } from 'react';
import CartWidget from './CartWidget';

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <nav>
        <div className="navbar">
        <div className="logo">
        <img src="../img/logo.jpg" alt="Logo" />
        </div>
          <div className="search">
            <input
              type="text"
              placeholder="🔎Buscar..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className="Carrito">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}
