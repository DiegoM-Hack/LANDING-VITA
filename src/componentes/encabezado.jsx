import { Link } from 'react-router-dom';
import '../estilos/App.css';

const Encabezado = () => {
  return (
    <header className="header" id="inicio">
      <div className="logo">
        <img src="./imagenes/logoD.png" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="App">Home</Link>
        <a href="#descripcion">Descripción</a>
        <Link to="/idiomas" >Idiomas</Link>
        <a href="#informacion">Información</a>
        <a href="nostros.html" target="_blank">Nosotros</a>
        <Link to="/portal" target='_blank'>Portal en Línea</Link>
      </nav>
    </header>
  );
};

export default Encabezado;

