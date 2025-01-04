import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import encabezado from './componentes/Encabezado';
import MisionVision from './componentes/MisionVision';
import DescripcionCurso from './componentes/DescripcionCurso';
import VentajasBeneficios from './componentes/VentajasBeneficios';
import Ubicacion from './componentes/Ubicacion';
import FormularioInscripcion from './componentes/FormularioInscripcion';
import PortalEnLinea from './paginas/PortalEnLinea';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal con todos los componentes */}
        <Route
          path="/"
          element={
            <>
              <encabezado /> 
              <MisionVision />
              <DescripcionCurso />
              <VentajasBeneficios />
              <Ubicacion />
              <FormularioInscripcion />
            </>
          }
        />

        {/* Página del portal, solo muestra el portal */}
        <Route path="/portal" element={<PortalEnLinea />} />
      </Routes>
    </Router>
  );
}

export default App;
