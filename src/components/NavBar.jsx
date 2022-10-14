import React from 'react'

import navBar from '../assets/css/navBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="links">
          <Link to="/" className="link"><h3>🍕 Pizzería Mamma Mia!</h3></Link>
          <Link to="/carrito" className="link"><span>🛒</span></Link>
        </div>
      </div>
    </nav>
  )
}
