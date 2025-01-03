import '../estilos/App.css';


const Informacion = () => {
  return (
    <section className="info-section" id="informacion">
      <h1>Información de Cursos de Idiomas</h1>
      <p>Descubre nuestros cursos y elige el que mejor se adapte a tus necesidades y disponibilidad. Los cursos están diseñados para ayudarte a alcanzar un dominio fluido del idioma.</p>
      <table className="info-table">
        <thead>
          <tr>
            <th>Idioma</th>
            <th>Precio</th>
            <th>Inicio de Clases</th>
            <th>Duración del Curso</th>
            <th>Nivel</th>
            <th>Modalidad</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
        <tr>
                    <td>Inglés</td>
                    <td>$200</td>
                    <td>15 de enero</td>
                    <td>3 meses</td>
                    <td>
                        <ul>
                            <li><strong>Básico:</strong> Para quienes comienzan desde cero.</li>
                            <li><strong>Intermedio:</strong> Para quienes ya tienen nociones básicas y quieren mejorar.</li>
                            <li><strong>Avanzado:</strong> Para estudiantes que buscan perfeccionar su fluidez y comprensión del idioma.</li>
                        </ul>
                    </td>
                    <td>Presencial y Online</td>
                    <td>Curso intensivo que cubre gramática, vocabulario y conversación para dominar el inglés rápidamente.</td>
                </tr>
                <tr>
                    <td>Francés</td>
                    <td>$220</td>
                    <td>20 de febrero</td>
                    <td>4 meses</td>
                    <td>
                        <ul>
                            <li><strong>Básico:</strong> Introducción al francés, con énfasis en vocabulario básico y pronunciación.</li>
                            <li><strong>Intermedio:</strong> Refuerzo de habilidades gramaticales y conversación en situaciones cotidianas.</li>
                        </ul>
                    </td>
                    <td>Presencial</td>
                    <td>Aprende francés con un enfoque práctico, interactivo y cultural, ideal para quienes buscan una inmersión total.</td>
                </tr>
                <tr>
                    <td>Alemán</td>
                    <td>$250</td>
                    <td>10 de marzo</td>
                    <td>4 meses</td>
                    <td>
                        <ul>
                            <li><strong>Básico:</strong> Fundamentos del alemán, incluyendo los casos y la estructura de la lengua.</li>
                            <li><strong>Intermedio:</strong> Ampliación de vocabulario y gramática, con enfoque en conversación fluida.</li>
                        </ul>
                    </td>
                    <td>Online</td>
                    <td>Curso flexible para aprender alemán desde la comodidad de tu hogar, adaptado a tu ritmo y horario.</td>
                </tr>
                <tr>
                    <td>Japonés</td>
                    <td>$300</td>
                    <td>5 de abril</td>
                    <td>5 meses</td>
                    <td>
                        <ul>
                            <li><strong>Básico:</strong> Aprende los caracteres kanji, hiragana y katakana, y frases comunes.</li>
                            <li><strong>Intermedio:</strong> Mejora tu comprensión auditiva y capacidad para comunicarte en japonés.</li>
                        </ul>
                    </td>
                    <td>Presencial y Online</td>
                    <td>Un curso completo que te permite conocer tanto el idioma como la cultura japonesa en profundidad.</td>
                </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Informacion;
