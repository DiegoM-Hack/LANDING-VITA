import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../servicios/firebase';  // Asegúrate de importar las funciones de Firebase
import { getAuth, signOut } from "firebase/auth";  
import Encabezado from '../componentes/encabezado';  // Importando el componente Encabezado
import "../estilos/estudiantes.css";

const Estudiantes = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los cursos desde Firestore
  const fetchCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "cursos")); // Suponiendo que tienes una colección de "cursos"
      const cursosData = [];
      querySnapshot.forEach((doc) => {
        cursosData.push({ id: doc.id, ...doc.data() });
      });
      setCursos(cursosData);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los cursos: ", error);
      setLoading(false);
    }
  };
    // Función para cerrar sesión
    const handleLogout = async () => {
      const auth = getAuth();
      try {
        await signOut(auth);
        window.location.href = "/portal"; // Redirigir al login tras cerrar sesión
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    };

  // Cargar los cursos al montar el componente
  useEffect(() => {
    fetchCursos();
  }, []);

  // Mostrar la información de los cursos
  const renderCursos = () => {
    if (loading) {
      return <div>Cargando cursos...</div>;
    }

    return (
      
      <div className="estudiantes-cursos-container">
        <h2>Cursos de Idiomas Disponibles</h2>
        <div className="estudiantes-cursos-list">
          {cursos.map((curso) => (
            <div key={curso.id} className="estudiantes-curso-card">
              <h3>{curso.nombre}</h3>
              <p>{curso.descripcion}</p>
              <p><strong>Duración:</strong> {curso.duracion}</p>
              <p><strong>Precio:</strong> ${curso.precio}</p>
              <button className="estudiantes-btn-inscribirse">Inscribirse</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Aquí el encabezado está fuera del contenedor general */}
      <Encabezado /> {/* Este componente está fuera del div .estudiantes-container */}

      <div className="estudiantes-container">
        {/* Botón de Cerrar Sesión */}
          <button className="logout-btn" onClick={handleLogout}>
         Cerrar Sesión
        </button>
        {/* Sección de Introducción */}
        <div className="estudiantes-introduccion">
          <h1>Bienvenido a los Cursos de Idiomas</h1>
          <p>
            En nuestra plataforma, ofrecemos una variedad de cursos de idiomas que te ayudarán a mejorar tus habilidades lingüísticas.
            Ya sea que busques aprender un nuevo idioma para tu carrera profesional, viajar, o simplemente por placer, tenemos algo para ti.
          </p>
        </div>

        {/* Sección de Beneficios */}
        <div className="estudiantes-beneficios">
          <h2>Beneficios de Aprender un Idioma</h2>
          <ul>
            <li><strong>Oportunidades laborales:</strong> Hablar un segundo idioma puede abrirte nuevas puertas en el mundo profesional.</li>
            <li><strong>Conexión cultural:</strong> Aprender un idioma te permite conectarte más profundamente con otras culturas y comunidades.</li>
            <li><strong>Mejora personal:</strong> Aprender algo nuevo es siempre un desafío gratificante y puede mejorar tu confianza.</li>
          </ul>
        </div>


        {/* Sección de Testimonios */}
        <div className="estudiantes-testimonios">
          <h2>Lo que dicen nuestros estudiantes</h2>
          <div className="estudiantes-testimonio">
            <p>"Los cursos de inglés me han permitido conseguir un mejor trabajo y comunicarme con personas de todo el mundo. ¡Una experiencia increíble!"</p>
            <span>- Ana García</span>
          </div>
          <div className="estudiantes-testimonio">
            <p>"Gracias a los cursos de francés, pude viajar a París y disfrutar de la cultura local. Los profesores son excelentes."</p>
            <span>- Carlos Rodríguez</span>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="estudiantes-contacto">
          <h2>Contacto y Soporte</h2>
          <p>Si tienes alguna pregunta sobre los cursos, procesos de inscripción, o necesitas ayuda, no dudes en contactarnos:</p>
          <p>Email: soporte@idiomas.com</p>
          <p>Teléfono: +1 234 567 890</p>
        </div>
      </div>
    </>
  );
};

export default Estudiantes;
