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
  
          <div className="term1">
          <div className="checkbox">
          <input className="ch1" type="checkbox" required />
          <label className="lbl1" > He leído y acepto las Politicas de Privacidad</label>
          </div>
          <div className="checkbox2">
          <input className="ch2" type="checkbox" required />
            <label className="lbl2" > He leído y acepto los Terminos y Condiciones</label>
          </div>
          <input className="enviar" type="submit" value="Enviar" />
          </div>
          
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

        <div className="copyright">
          <p>&copy; Instituto de idiomas. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default FormularioInscripcion;
  