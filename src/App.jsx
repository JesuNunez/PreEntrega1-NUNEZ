import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ProductCard from './components/productcard.jsx';

function App() {
  return (
    <>
      <NavBar />
      <h1>Tendencias</h1>
      <ItemListContainer/>
    </>
  );
}

export default App;
