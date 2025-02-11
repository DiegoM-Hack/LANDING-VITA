import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { db, getDocs, collection } from '../servicios/firebase';
import '../estilos/portal.css';
import Encabezado from '../componentes/encabezado';

const PortalEnLinea = () => {
  const [formData, setFormData] = useState({ email: '', contraseña: '', rol: 'estudiante' });
  const [mensaje, setMensaje] = useState('');
  const [redirect, setRedirect] = useState(null);  // Guardará la ruta a la que redirigir

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usuariosRef = collection(db, 'usuarios');
      const snapshot = await getDocs(usuariosRef);
      let usuarioEncontrado = null;

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === formData.email && data.contraseña === formData.contraseña) {
          usuarioEncontrado = data;
        }
      });

      if (usuarioEncontrado) {
        if (usuarioEncontrado.rol === 'estudiante') {
          setRedirect('/estudiante'); // Establece la ruta para redirigir
        } else if (usuarioEncontrado.rol === 'docente') {
          setRedirect('/docente'); // Establece la ruta para redirigir
        }
      } else {
        setMensaje('Correo o contraseña incorrectos');
      }
    } catch (error) {
      setMensaje('Error al iniciar sesión: ' + error.message);
    }
  };

  // Si se ha establecido una ruta de redirección, usar Navigate para redirigir
  if (redirect) {
    return <Navigate to={redirect} replace={true} />;
  }

  return (
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
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="email" 
                placeholder="Correo Electrónico" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="password" 
                name="contraseña" 
                placeholder="Contraseña" 
                value={formData.contraseña} 
                onChange={handleChange} 
                required 
              />
              <select 
                name="rol" 
                value={formData.rol} 
                onChange={handleChange} 
                required
              >
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
              </select>
              <button type="submit" className="btn-primary">Iniciar Sesión</button>
              {mensaje && <p>{mensaje}</p>}
              <a href="#" className="forgot-link">¿Olvidó su contraseña?</a>
            </form>
            <hr />
            <p>¿Eres nuevo aquí?<br />Examen de ubicación o matrícula</p>
            <button className="btn-secondary" onClick={() => setRedirect('/registro')}>Regístrate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortalEnLinea;
