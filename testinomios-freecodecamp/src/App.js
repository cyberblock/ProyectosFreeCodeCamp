import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos</h1>
      <div className='contenedor-principal'>

      <Testimonio
        nombre='The Rock'
        pais='Suecia'
        imagen='the-rock.jpg'
        cargo='Ingeniero de Software'
        empresa='Spotify'
        testimonio='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
        consectetur, adipisci velit.porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
      />


      <Testimonio
        nombre='Emma Watson'
        pais='Suecia'
        imagen='Emma-Watson.jpg'
        cargo='Web-developer'
        empresa='Facebook'
        testimonio='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
        consectetur, adipisci velit.porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
      />

      <Testimonio
        nombre='Emma Watson'
        pais='Suecia'
        imagen='Emma-Watson.jpg'
        cargo='Web-developer'
        empresa='Facebook'
        testimonio='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
        consectetur, adipisci velit.porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
      />

      </div>
    </div>
  );
}

export default App;
