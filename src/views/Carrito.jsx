import React, { useContext } from 'react'
import Context from '../Context'

//css
import '../assets/css/carrito.css';

export default function Carrito(totalCar) {
  
  const { carrito, setCarrito, agregarAlCarro, sumarPizza, restarPizza} = useContext(Context);
  console.log(carrito)

  const totalCarrito = carrito.reduce((previusValue, {count, price}) => previusValue + (price * count), 0);
  
  
  return (
    <div>
      <div className="container">
        
          <section className="carrito">
            <h2>Detalles del pedido:</h2>
            {carrito.map((c, i) => (
              <div className="row" key={i}>
                <div className="carrito-content">
                  <div className="col-md-9">
                    <div className="pizza-carrito"> 
                      <img src={c.img} alt={c.name} />
                      <h3>{c.name}</h3>
                    </div>
                  </div>
                  <div className="col-md-3">
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
            <h2>Total ${totalCarrito}</h2>
            <button type="button" className="btn btn-success">Ir a pagar</button>
          </section>
        
      </div>
    </div>
  )
}
