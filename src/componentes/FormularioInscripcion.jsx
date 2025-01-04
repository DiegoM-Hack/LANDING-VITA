function FormularioInscripcion() {
    return (
      <footer>
        <form className="formulario">
          <h3 className="titulo_formulario">Inscribete Aquí</h3>
          <input className="formulario_input" type="email" required placeholder="Correo electronico" />
  
          <select id="idioma" required>
            <option value="" disabled selected>
              Seleccione un idioma
            </option>
            <option value="ingles">Inglés</option>
            <option value="frances">Francés</option>
            <option value="aleman">Alemán</option>
            <option value="japones">Japonés</option>
          </select>
  
          <div className="checkbox">
            <label for="politicasdeprivacidad"> He leído y acepto las Politicas de Privacidad</label>
            <input id="politicas" type="checkbox" required />
          </div>
          <div className="checkbox2">
            <label for="terminosycondiciones"> He leído y acepto los Terminos y Condiciones</label>
            <input className="terminos" type="checkbox" required />
          </div>
          <input className="enviar" type="submit" value="Enviar" />
        </form>
        <div className="redes_sociales">
          <a href="https://wa.me/593979240408" target="_blank">
            <img className="WhatsApp" src="imagenes/WhatsApp.png" alt="WhatsApp" />
          </a>
  
          <a href="https://www.instagram.com/cec_epn/" target="_blank">
            <img className="Instagram" src="imagenes/Instagram-Logo.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/CEC.EPN.EC" target="_blank">
            <img className="Facebook" src="imagenes/facebock logo.png" alt="Facebook" />
          </a>
        </div>
  
        <div className="terminos-privacidad">
          <a href="privacidad.html" target="_blank">
            Ver Politicas de Privacidad
          </a>
          <a href="terminos.html" target="_blank">
            Ver Terminos y Condiciones
          </a>
        </div>
        <div className="copyright">
          <p>&copy; Instituto de idiomas. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default FormularioInscripcion;
  