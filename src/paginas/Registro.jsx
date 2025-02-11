import { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importa Navigate para la redirección
import { db, collection, addDoc } from '../servicios/firebase';
import '../estilos/portal.css';
import Encabezado from '../componentes/Encabezado';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    confirmarContraseña: '',
    rol: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [redirect, setRedirect] = useState(null); // Estado para redirección

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contraseña !== formData.confirmarContraseña) {
      setMensaje('Las contraseñas no coinciden');
      return;
    }

    try {
      await addDoc(collection(db, 'usuarios'), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        contraseña: formData.contraseña, 
        rol: formData.rol,
        fechaRegistro: new Date()
      });

      setMensaje('Registro exitoso');
      setFormData({ nombre: '', apellido: '', email: '', contraseña: '', confirmarContraseña: '', rol: '' });
    } catch (error) {
      setMensaje('Error al registrar: ' + error.message);
    }
  };

  // Si `redirect` tiene un valor, redirige a la página correspondiente
  if (redirect) {
    return <Navigate to={redirect} replace={true} />;
  }

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
            <form onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
              <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
              <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} required />
              <input type="password" name="confirmarContraseña" placeholder="Confirmar Contraseña" value={formData.confirmarContraseña} onChange={handleChange} required />
              <select name="rol" value={formData.rol} onChange={handleChange} required>
                <option value="" disabled>Selecciona tu rol</option>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
              </select>
              <button type="submit" className="btn-primary">Crear</button>
            </form>
            {mensaje && <p>{mensaje}</p>}

            {/* Nuevo botón para volver al login */}
            <p>¿Ya tienes una cuenta?</p>
            <button className="btn-secondary" onClick={() => setRedirect('/portal')}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
