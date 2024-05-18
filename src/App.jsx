import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ProductCard from './components/ProductCard.jsx';

function App() {
  return (
    <>
      <NavBar />
      <ProductCard/>
      <h1>Tendencias</h1>
      <ItemListContainer/>
    </>
  );
}

export default App;
