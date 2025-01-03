import logo from "../imagenes/logoD.png"
import '../App.css'

export function Encabezado() {
    return (
      <div className="App">
        <header class="header" id="inicio">
        
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <nav class="nav">
            <a href="#inicio">Inicio</a>
            <a href="#descripcion">Descripción</a>
            <a href="#mapa">Ubicación</a>
            <a href="#informacion">Información</a>
            <a href="nostros.html" target="_blank">Nosotros</a>
            <a href="portal.html" target="_blank">Portal en linea</a>
        </nav>
    </header>
      </div>
    );
  }
  
  export default Encabezado;


