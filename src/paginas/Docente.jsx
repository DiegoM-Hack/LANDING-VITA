import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from '../servicios/firebase';
import { getAuth, signOut } from "firebase/auth"; // Importación corregida
import "../estilos/docente.css";

const Docente = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({ nombre: '', email: '', rol: '' });
  const [editing, setEditing] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  // Obtener los usuarios desde Firestore con manejo de errores
  const fetchUsuarios = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      const usuariosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsuarios(usuariosData);
    } catch (error) {
      console.error("Error al obtener los usuarios: ", error);
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Cerrar sesión
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      window.location.href = "/portal";
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  };

  // Guardar o actualizar usuario
  const saveUsuario = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        const usuarioRef = doc(db, "usuarios", idEditando);
        await updateDoc(usuarioRef, usuario);
        setEditing(false);
        setIdEditando(null);
      } else {
        await addDoc(collection(db, "usuarios"), usuario);
      }
      setUsuario({ nombre: '', email: '', rol: '' });
      fetchUsuarios();
    } catch (error) {
      console.error("Error al guardar el usuario: ", error);
    }
  };

  // Editar usuario
  const editUsuario = (id) => {
    const usuarioEditado = usuarios.find((usuario) => usuario.id === id);
    setUsuario({ nombre: usuarioEditado.nombre, email: usuarioEditado.email, rol: usuarioEditado.rol });
    setEditing(true);
    setIdEditando(id);
  };

  // Eliminar usuario
  const deleteUsuario = async (id) => {
    try {
      await deleteDoc(doc(db, "usuarios", id));
      fetchUsuarios();
    } catch (error) {
      console.error("Error al eliminar el usuario: ", error);
    }
  };

  return (
    <div className="crud-container">
      <button className="logout-btn" onClick={handleLogout}>Cerrar Sesión</button>
      
      <form onSubmit={saveUsuario}>
        <h2 className='tituloC'>Bienvenido al sistema de Gestión de Usuarios</h2>
        <h3>{editing ? "Editar Usuario" : "Agregar Usuario"}</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          required
        />
        <select
          value={usuario.rol}
          onChange={(e) => setUsuario({ ...usuario, rol: e.target.value })}
          required
        >
          <option value="">Seleccionar rol</option>
          <option value="estudiante">Estudiante</option>
          <option value="docente">Docente</option>
        </select>
        <button type="submit">{editing ? "Actualizar" : "Agregar"} Usuario</button>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>
                  <button onClick={() => editUsuario(usuario.id)}>Editar</button>
                  <button onClick={() => deleteUsuario(usuario.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Docente;
