
import './App.css';
import Navbar from './componentes/Navbar';


import Products from "./componentes/Products";
import imagen from './assets/imagen';
function App () {
  return (
    <div className="App">
      
      <h1>
      <Navbar/>
      
        Munchen casa de cervezas
        <style>{"body { background-color: grey; }"}</style>
        <Products/>
        
        
      </h1>
      <h2> By Serrano Matias</h2>
        <img src = {imagen.img1}/>
    </div>
  );
  
}

export default App;
