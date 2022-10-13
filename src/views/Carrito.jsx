import React, { useContext } from 'react'
import Context from '../Context'

//css
import carrito from '../assets/css/carrito.css';

export default function Carrito() {

  const { carrito, setCarrito, agregarAlCarro} = useContext(Context);
  console.log(carrito)
  
  return (
    <div>
      <div className="container">
        
          <section className="carrito">
            <h2>Detalles del pedido:</h2>
            {carrito.map((c, i) => (
              <div className="row" key={i}>
                <div className="carrito-content">
                  <div className="col-md-6"> 
                    <img src={c.img} alt={c.name} />
                    {c.name}
                  </div>
                  <div className="col-md-6">
                    ${c.price}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </section>
        
      </div>
    </div>
  )
}
