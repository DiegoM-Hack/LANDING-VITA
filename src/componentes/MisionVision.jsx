import { Link } from 'react-router-dom';

function MisionVision() {
    return (
      <section className="seccionM" id="misvi">
        <div className="mision">
        <h2>Pagina principal</h2>
        <Link to="/">Ir al menu</Link>
          <h2 className="title2">Misión</h2>
          <p>
            El curso de Inglés General está diseñado para estudiantes de todos los niveles, desde principiantes hasta avanzados, que buscan mejorar su competencia en el idioma inglés en un entorno interactivo y efectivo. Este curso cubre los aspectos fundamentales del idioma, incluyendo gramática, vocabulario, comprensión auditiva, expresión oral, lectura y escritura. Se enfoca en habilidades prácticas y cotidianas para que los estudiantes puedan comunicarse con confianza en contextos personales, académicos y laborales.
          </p>
        </div>
        <div className="vision">
          <h2 className="title2">Visión</h2>
          <p>
            El curso de Inglés General está diseñado para estudiantes de todos los niveles, desde principiantes hasta avanzados, que buscan mejorar su competencia en el idioma inglés en un entorno interactivo y efectivo. Este curso cubre los aspectos fundamentales del idioma, incluyendo gramática, vocabulario, comprensión auditiva, expresión oral, lectura y escritura. Se enfoca en habilidades prácticas y cotidianas para que los estudiantes puedan comunicarse con confianza en contextos personales, académicos y laborales.
          </p>
        </div>
      </section>
    );
  }
  
  export default MisionVision;
  