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
        <img src="https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-instagram-degradado_23-2149718661.jpg?w=826&t=st=1715866357~exp=1715866957~hmac=dfe7a936491c38b8b1b62c90adf250645e13d565a112afc4b6097d64ae70f354" alt="Logo" />
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
