import { Link } from 'react-router-dom';
import '../estilos/App.css';
import { useEffect } from 'react';

const Encabezado = () => {
  useEffect(() => {
    // Cambiar el título de la página
    document.title = "Aprende Inglés";

    // Configurar el favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = "imagenes/icono.png";
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = "icon";
      newFavicon.type = "image/x-icon";
      newFavicon.href = "imagenes/icono.png";
      document.head.appendChild(newFavicon);
    }
  }, []);

  return (
    <header className="header" id="inicio">
      <div className="logo">
        <img src="./imagenes/icono.png" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/nosotros">Certificaciones</Link>
        <Link to="/idiomas">Idiomas</Link>
        <Link to="/pago">Formas de pago</Link>
        <Link to="/portal">Portal en Línea</Link>
      </nav>
    </header>
  );
};

export default Encabezado;
