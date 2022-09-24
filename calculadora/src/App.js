import './App.css';
import Boton from './componentes/Boton'
import freeCodeCampLogo from './imagenes/FreeCodeCampLogo.png';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='LogoDeFreeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
          <div className='fila'>
            <Boton>1</Boton>
          </div>
          <div className='fila'>
            <Boton>+</Boton>
          </div>
          <div className='fila'>
            <Boton>3</Boton>
          </div>
          <div className='fila'>
            <Boton>4</Boton>
          </div>
          <div className='fila'>
            <Boton>+</Boton>
          </div>
      </div>
    </div>
  );
}

export default App;
