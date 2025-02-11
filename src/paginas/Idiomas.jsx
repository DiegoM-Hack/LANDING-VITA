import '../estilos/idiomas.css'
import Encabezado from '../componentes/encabezado';




function Idiomas() {
  return (
    <>
    <Encabezado />
      
      <section className="contenedor_Padre">
        <div className="contenedor_hijo1">
          <img className="imagenes_idiomas" src="/imagenes/ingles2.png" alt="Imagen Inglés" />
          <h2>Idioma Inglés</h2>
          <p>Inicio: 14 de enero, 2025</p>
          <p>Fin: 12 de marzo, 2025</p>
          <p>Modalidades: Presencial y Virtual</p>
          <p>Duración: 80 horas</p>
          <button className="boton_idiomas">Agenda tu examen de ubicación</button>
          
        </div>
        <div className="contenedor_hijo1">
          <img className="imagenes_idiomas" src="/imagenes/frances.png" alt="Imagen Francés" />
          <h2>Idioma Francés</h2>
          <p>Inicio: 14 de enero, 2025</p>
          <p>Fin: 12 de marzo, 2025</p>
          <p>Modalidades: Presencial y Virtual</p>
          <p>Duración: 80 horas</p>
          <button className="boton_idiomas">Agenda tu examen de ubicación</button>
        </div>
      </section>
      <section className="contenedor_Padre">
        <div className="contenedor_hijo1">
          <img className="imagenes_idiomas" src="/imagenes/aleman2.png" alt="Imagen Alemán" />
          <h2>Idioma Alemán</h2>
          <p>Inicio: 14 de enero, 2025</p>
          <p>Fin: 12 de marzo, 2025</p>
          <p>Modalidades: Presencial</p>
          <p>Duración: 80 horas</p>
          <button className="boton_idiomas">Agenda tu examen de ubicación</button>
        </div>
        <div className="contenedor_hijo1">
          <img className="imagenes_idiomas" src="/imagenes/japones.png" alt="Imagen Japonés" />
          <h2>Idioma Japonés</h2>
          <p>Inicio: 14 de enero, 2025</p>
          <p>Fin: 12 de marzo</p>
          <p>Modalidades: Presencial</p>
          <p>Duración: 80 horas</p>
          <button className="boton_idiomas">Agenda tu examen de ubicación</button>
        </div>
      </section>
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
  );
}

export default Idiomas;
