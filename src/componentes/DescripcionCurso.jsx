import { Link } from 'react-router-dom';

function DescripcionCurso() {
    return (
      <section className="seccion1" id="inicio">
        <div className="imagen1">
          <img src="imagenes/joven.avif" alt="Chica" />
        </div>
        <div className="descripcion1">
          <h2 className="title2">Descripción del curso</h2>
          <Link to="/">Ir al menu</Link>
          <p>
            El curso de Inglés General está diseñado para estudiantes de todos los niveles, desde principiantes hasta avanzados, que buscan mejorar su competencia en el idioma inglés en un entorno interactivo y efectivo. Este curso cubre los aspectos fundamentales del idioma, incluyendo gramática, vocabulario, comprensión auditiva, expresión oral, lectura y escritura. Se enfoca en habilidades prácticas y cotidianas para que los estudiantes puedan comunicarse con confianza en contextos personales, académicos y laborales.
          </p>
        </div>
      </section>
    );
  }
  
  export default DescripcionCurso;
  