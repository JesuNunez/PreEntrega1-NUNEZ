import './NavBar.css';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <h1 className="navbar-logo">Shop</h1>
          <h1 className="navbar-col">Zapatillas</h1>
          <h1 className="navbar-col">Pantalones</h1>
          <h1 className="navbar-col">Remeras</h1>
          <CartWidget /> 
        </nav>
      </div>
    </>
  );
}
