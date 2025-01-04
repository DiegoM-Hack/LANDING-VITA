import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/encabezado';
import Informacion from './componentes/Informacion';
import PortalEnLinea from './paginas/PortalEnLinea';
import Idiomas from './paginas/Idiomas';






function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal con todos los componentes */}
        <Route
          path="/"
          element={
            <>
              <Encabezado /> {/* Encabezado visible solo en la página principal */}
              <Informacion /> {/* Información principal */}
            </>
          }
        />

        {/* Página del portal, solo muestra el portal */}
        <Route path="/portal" element={<PortalEnLinea />} />
        <Route path="/idiomas" element={<Idiomas />} />
      </Routes>

    </Router>
    

  );
};

export default App;


