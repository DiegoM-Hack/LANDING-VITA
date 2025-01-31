import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Principal from './componentes/principal';
import DescripcionCurso from './componentes/DescripcionCurso';
import MisionVision from './componentes/MisionVision';
import Ubicacion from './componentes/Ubicacion';
import Loguin from './componentes/loguin';


function App() {
  return (
    
    <Router>
      <Routes>
            
            <Route path='/' element={<Principal/> }/>
            <Route path='/menu' element={<DescripcionCurso/> }/>
            <Route path='/mision' element={<MisionVision/> }/>
            <Route path='/ubicacion' element={<Ubicacion/> }/>
            <Route path='/loguin' element={<Loguin/> }/>
      
      
      </Routes>
    
    </Router>

  );
}

export default App;
