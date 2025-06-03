import Navbar from "../components/Navbar";
import Formulario from "../components/Formulario"
import './NuevaReceta.css';

function NuevaReceta() {
  return (
    <div className="NuevaReceta">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="Cuerpo">
        <Formulario></Formulario>
      </div>
    </div>
  );
}

export default NuevaReceta;