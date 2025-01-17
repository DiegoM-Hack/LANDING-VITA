import '../estilos/portal.css';
import Encabezado from '../componentes/Encabezado';

const Register = () => {
  return (
    <>
      <Encabezado />
      <div className="background">
      <div className="register-container">
          <div className="headerportal">
            <h1>Registro</h1>
          </div>
          <div className="register-box">
          <img src="./imagenes/logoD.png" className="logo" alt="Logo" />
          <h2>Crear Cuenta</h2>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Correo Electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <input type="password" placeholder="Confirmar Contraseña" required />
            <select required>
              <option value="" disabled selected>Selecciona tu rol</option>
              <option value="estudiante">Estudiante</option>
              <option value="docente">Docente</option>
            </select>
            <button type="submit" className="btn-primary">Crear</button>
          </form>
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
  );
};

export default Register;
