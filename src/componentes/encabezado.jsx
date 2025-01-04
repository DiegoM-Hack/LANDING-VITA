import { Link } from 'react-router-dom';
import '../estilos/App.css';

const Encabezado = () => {
  return (
    <header className="header" id="inicio">
      <div className="logo">
        <img src="./imagenes/icono.png" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/App">Home</Link>
        <Link to="/nosotros" >Certificaciones</Link>
        <Link to="/idiomas" >Idiomas</Link>
        <a href="./paginas/Nosotros.jsx">Formas de pago</a>
        <Link to="/portal" target='_blank'>Portal en Línea</Link>
      </nav>
    </header>
  );
};

export default Encabezado;

