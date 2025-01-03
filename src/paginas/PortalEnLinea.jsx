import '../estilos/portal.css';

const PortalEnLinea = () => {
  return (
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
            <a href="#" className="forgot-link">¿Olvidó su contraseña?</a>
          </form>
          <hr />
          <p>¿Eres nuevo aquí?<br />Examen de ubicación o matrícula</p>
          <button className="btn-secondary">Regístrate</button>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <p>Matriz: Av. Toledo N23-55 y Madrid; Quito-Ecuador </p>
          <div className="social-container">
            <p className="follow-text">Síguenos:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/CEC.EPN.EC" target="_blank">Facebook</a>
              <a href="https://www.instagram.com/cec_epn/" target="_blank">Instagram</a>
              <a href="https://wa.me/593979240408" target="_blank">WhatsApp</a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">Copyright © 2024 English-Language · All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default PortalEnLinea;
