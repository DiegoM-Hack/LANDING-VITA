import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';


function Principal () {
    return(
        
        
    <div class="form-container">
        <h2>Bienvenido a mi proyecto</h2>
        <h2>Pagina principal</h2>
        <Link to="/menu">Ir al menu</Link>
        <br></br>
        <Link to="/mision">Ir a la mision</Link>
        <br></br>
        <Link to="/ubicacion">Ir a la ubicacion</Link>
        <br></br>
        <Link to="/loguin">Ir a loguin</Link>
        
    </div>

    );

};
export default Principal;