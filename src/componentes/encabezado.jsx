import { Link } from 'react-router-dom';
import '../estilos/App.css';

const Encabezado = () => {
  return (
    <header className="header" id="inicio">
      <div className="logo">
        <img src="./imagenes/logoD.png" alt="Logo" />
      </div>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#descripcion">Descripción</a>
        <a href="#mapa">Ubicación</a>
        <a href="#informacion">Información</a>
        <a href="nostros.html" target="_blank">Nosotros</a>
        <Link to="/portal" target='_blank'>Portal en Línea</Link>
      </nav>
    </header>
  );
};

export default Encabezado;

