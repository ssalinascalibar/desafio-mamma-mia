import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar';

//Context
import Context from './Context';

//Views
import Home from './views/Home';
import Pizza from './views/Pizza'; // detalle de cada pizza
import Carrito from './views/Carrito'; // total de los pedidos


function App() {
  // Este estado guarda todos los productos en la variable pìzzas
  const [ pizzas, setPizzas] = useState([]);
  
  // Estado para guardar el carrito de compras, que inicia como vacio
  const [ carrito, setCarrito] = useState([]);

  //llamado a la api local
  const getPizzas = async() => {
    const endPoint = "/pizzas.json";
    const response = await fetch(endPoint);
    const data = await response.json();

    setPizzas(data);
    console.log(data);
  };

  // renderiza la api
  useEffect(() => {
    getPizzas();

  }, []);

  // id, img, name, price, es destructuración de los datos (data) que es todo el array de pizzas
  const agregarAlCarro = ({ id, img, name, price }) => {
    const findPizza = carrito.findIndex((p) => p.id === id);
    const pizza = { id, img, name, price, count: 1 };

    if (findPizza >= 0) {
      carrito[findPizza].count++;
      setCarrito([...carrito]);
      console.log(carrito)
    } else {
      setCarrito([...carrito, pizza]);
    }
    
  };

  const sumarPizza = (i) => {
    carrito[i].count++;
    setCarrito([...carrito])
  }
  
  const restarPizza = (i) => {
    carrito[i].count--;
    setCarrito([...carrito])
  }


  return (
    <div className="App">
      {/* Se dejan disponibles las variables globales mediante Provider */}
      <Context.Provider value={{ pizzas, setPizzas, carrito, setCarrito, agregarAlCarro, sumarPizza, restarPizza }}> 
        <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pizza/:id' element={<Pizza />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
}

export default App;
