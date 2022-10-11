//home css
import home from '../assets/css/home.css';

//Context
import React, { useContext } from 'react'

//components
import Header from '../components/Header';

//Context
import Context from '../Context';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const { pizzas, setPizzas} = useContext(Context);

  //useNavigate solo crea la ruta, no la vista
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          {pizzas.map(pizza => 
            <div className="col-md-4" key={pizza.id}>
              <div className="card" >
                <img src={pizza.img} className="card-img-top" alt={pizza.name}></img>    
                <div className="card-body">
                    <div className="card-title"><h2>{pizza.name}</h2></div>
                    <hr/>    
                    <h5>Ingredientes :</h5>
                  <ul>
                    {pizza.ingredients.map((ingredient, i) => (
                      // se utiliza i como indice para iterar ya que hay conflicto con pizza.id dando un error de repetición de id
                    <li key={i}>🍕 {ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-transparent">
                  <h2>${pizza.price}</h2>
                  <div className="buttons-card">
                    <button type="button" className="btn btn-info" onClick={() => navigate(`/pizza/${pizza.id}`)}>Ver Más</button>
                    <button type="button" className="btn btn-danger">Añadir</button>
                  </div>
                </div>
              </div>    
            </div>
            )}
        </div>
      </div>

    </div>
  )
}
