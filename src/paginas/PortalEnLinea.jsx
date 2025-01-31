import '../estilos/portal.css';
import Encabezado from '../componentes/Encabezado';
import registro from '../componentes/principal';
import { Route } from 'react-router-dom';

const PortalEnLinea = () => {
  return (
    <Route>
    <>
      <Encabezado />
      <div className="background">
        <div className="login-container">
          <div className="headerportal">
            <h1>English<span>•</span>Course</h1>
          </div>
          <div className="login-box">
            <img src="./imagenes/logoD.png" className="logo" alt="Logo" />
            <h2>Portal En Línea</h2>
            <form>
              <input type="text" placeholder="Cédula o Pasaporte" required />
              <input type="password" placeholder="Contraseña" required />
              <select>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
              </select>
              <button type="submit" className="btn-primary">Iniciar Sesión</button>
              <a href={registro} className="forgot-link">¿Olvidó su contraseña?</a>
            </form>
            <hr />
            <p>¿Eres nuevo aquí?<br />Examen de ubicación o matrícula</p>
            <button className="btn-secondary" >Regístrate</button>
            <a href={registro} className="forgot-link">¿Olvidó su contraseña?</a>
          </div>
        </div>
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
      </div>
    </>
    <Route path="/registro" element={<registro/>} />
</Route>
  );
};

export default PortalEnLinea;
