import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from '../servicios/firebase';  // Importa las funciones de Firebase
import"../estilos/docente.css";

const Docente = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({ nombre: '', email: '', rol: '' });
  const [editing, setEditing] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  // Obtener los usuarios desde Firestore
  const fetchUsuarios = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    const usuariosData = [];
    querySnapshot.forEach((doc) => {
      usuariosData.push({ id: doc.id, ...doc.data() });
    });
    setUsuarios(usuariosData);
  };

  // Guardar nuevo usuario
  const saveUsuario = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        // Si estamos editando, actualizamos el usuario
        const usuarioRef = doc(db, "usuarios", idEditando);
        await updateDoc(usuarioRef, usuario);
        setEditing(false);
        setIdEditando(null);
      } else {
        // Si no estamos editando, agregamos un nuevo usuario
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
      const usuarioRef = doc(db, "usuarios", id);
      await deleteDoc(usuarioRef);
      fetchUsuarios();
    } catch (error) {
      console.error("Error al eliminar el usuario: ", error);
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="crud-container">
      {/* Formulario de agregar o editar usuario */}
      <form onSubmit={saveUsuario}>
        <h2 className='tituloC'>Bienvenido al sistema de Gestion de Usuarios</h2>
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

      {/* Contenedor de la tabla */}
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
