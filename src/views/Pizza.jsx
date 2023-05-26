// vista para detalle de cada pizza

//css
import pizza from '../assets/css/pizza.css'; 

import React, { useContext } from 'react'

// Context deja disponible el uso de la variables globales
import Context from '../Context';

//captura el parametro pasado por la url
import { useParams } from 'react-router-dom'

 

export default function Pizza() {

  const { pizzas, agregarAlCarro } = useContext(Context);

  // trae el parametro id que se pasa mediante la url de navigate
  const { id } = useParams();
  console.log(id + 'id seleccionado');

  // funcion que encuentra y compara el id pasado por url con el del array
  const pizzaDetail = pizzas.find((pizza) => pizza.id === id);
  console.log(id + 'id pasado por url');
    
  

  return (
    <div>
      <div className="container">
        <section className="pizzaDetail">
        <div className="card">
          <div className="row">
            <div className="col-md-7">
              <img src={pizzaDetail.img} className="img-fluid rounded-start" alt={pizzaDetail.name} />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h3 className="card-title">{pizzaDetail.name}</h3>
                <hr/>
                <p className="card-text">{pizzaDetail.desc}</p>
                <ul>
                  {pizzaDetail.ingredients?.map((ingredient, i) => (
                    // se utiliza i como indice para iterar ya que hay conflicto con pizza.id dando un error de repetición de id
                  <li key={i}>🍕 {ingredient}</li>
                  ))}
                </ul>
                <div className="buttons-card-pizza">
                    <h2>${pizzaDetail.price}</h2>
                    <button type="button" className="btn btn-danger" onClick={() => agregarAlCarro(pizzaDetail)}>Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}
