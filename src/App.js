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
  
  // Estado para el total
  const [ total, setTotal] = useState(0);

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





  return (
    <div className="App">
      {/* Se dejan disponibles las variables globales mediante Provider */}
      <Context.Provider value={{ pizzas, setPizzas, total, setTotal }}> 
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
