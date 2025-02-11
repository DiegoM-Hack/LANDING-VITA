import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/encabezado';
import MisionVision from './componentes/MisionVision';
import DescripcionCurso from './componentes/DescripcionCurso';
import VentajasBeneficios from './componentes/VentajasBeneficios';
import Ubicacion from './componentes/Ubicacion';
import FormularioInscripcion from './componentes/FormularioInscripcion';
import PortalEnLinea from './paginas/PortalEnLinea';
import Idiomas from './paginas/Idiomas';
import Nosotros from './paginas/Nosotros';
import Pago from './paginas/Pago';
import Registro from './paginas/Registro';
import Estudiante from './paginas/Estudiante'; 
import Docente from './paginas/Docente';  

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal con todos los componentes */}
        <Route
          path="/"
          element={
            <>
              <Encabezado />
              <MisionVision />
              <DescripcionCurso />
              <VentajasBeneficios />
              <Ubicacion />
              <footer>
        <div className="redes_sociales">
          <a href="https://wa.me/593979240408" target="_blank" rel="noopener noreferrer">
            <img className="WhatsApp" src="/imagenes/WhatsApp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/cec_epn/" target="_blank" rel="noopener noreferrer">
            <img className="Instagram" src="/imagenes/Instagram-Logo.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/CEC.EPN.EC" target="_blank" rel="noopener noreferrer">
            <img className="Facebook" src="/imagenes/facebock logo.png" alt="Facebook" />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; Instituto de idiomas. Todos los derechos reservados.</p>
        </div>
      </footer>
            </>
          }
        />

        {/* Página del portal, solo muestra el portal */}
        <Route path="/portal" element={<PortalEnLinea />} />
        <Route path="/idiomas" element={<Idiomas />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/registro" element={<Registro />} />
        
        {/* Rutas para Estudiante y Docente */}
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/docente" element={<Docente />} />
      </Routes>
    </Router>
  );
}

export default App;
