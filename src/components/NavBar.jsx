import React from 'react'

import navBar from '../assets/css/navBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <div className="container">
        <Link to="/"><h2>Pizzería Mamma Mia!</h2></Link>
        <Link to="/carrito">carrito</Link>
      </div>
    </nav>
  )
}
