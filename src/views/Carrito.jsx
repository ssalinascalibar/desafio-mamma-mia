import React, { useContext } from 'react'
import Context from '../Context'

//css
import carrito from '../assets/css/carrito.css';

export default function Carrito() {
  
  const { carrito, setCarrito, agregarAlCarro, sumarPizza, restarPizza} = useContext(Context);
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
                    <div className="botonera" key={i}>
                      <h5>${c.price}</h5>
                      <button type="button" className="btn btn-danger" onClick={() => restarPizza(i)}> - </button>
                      <h5>{c.count}</h5>
                      <button type="button" className="btn btn-primary" onClick={() => sumarPizza(i)}> + </button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <button type="button" className="btn btn-success">Ir a pagar</button>
          </section>
        
      </div>
    </div>
  )
}
