import React, { useContext } from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom';

//css
import '../assets/css/navBar.css';

export default function NavBar() {
  
  const { carrito } = useContext(Context);

  // previus value es 0 , despues llamamos al context de carrito count y price despues la función => debe sumar valor inicial con precio, despues se multiplica
  // por la cantidad de elementos en este caso count
  const totalCarrito = carrito.reduce((previusValue, {count, price}) => previusValue + (price * count), 0);
  console.log(totalCarrito);

  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <Link to="/" className="link"><h3>🍕 Pizzería Mamma Mia!</h3></Link>
        <Link to="/carrito" className="link"><span className="total">🛒 Total: ${totalCarrito}</span></Link> 
      </div>
    </nav>
  )
}
