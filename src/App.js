
import './App.css';
import Navbar from './componentes/Navbar';
import Ventana from './componentes/Ventana';
import Ventana2 from './componentes/Ventana2';


function App() {
  return (
    <div className="App">
      
      <h1>
      <Navbar/>
      
        Munchen casa de cervezas
        <style>{"body { background-color: grey; }"}</style>
      <Ventana/> <Ventana2/>


      </h1>
    </div>
  );
}

export default App;
