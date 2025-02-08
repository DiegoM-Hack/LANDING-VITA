import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Configuración de Firebase (reemplaza con tus valores específicos)
const firebaseConfig = {
  apiKey: "AIzaSyARRZPVSEkYm3-638aqozQiHXmnoWdH-Gs",  // Reemplaza con tu clave de API
  authDomain: "crud-693b6.firebaseapp.com",  // Usualmente es: <nombre-del-proyecto>.firebaseapp.com
  projectId: "crud-693b6",  // Tu ID de proyecto
  storageBucket: "crud-693b6.appspot.com",  // Usualmente es: <nombre-del-proyecto>.appspot.com
  messagingSenderId: "914050564140",  // ID del proyecto
  appId: "1:914050564140:web:someappId",  // Reemplaza con tu appId (puedes encontrarlo en la consola de Firebase)
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar las funciones de Firestore
export { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };
