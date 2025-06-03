import Navbar from "../components/Navbar";
import Formulario_Inicio from "../components/Formulario_Inicio"
import './IniciarSesion.css';

function IniciarSesion() {
  return (
    <div className="IniciarSesion">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="Cuerpo">
        <Formulario_Inicio></Formulario_Inicio>
      </div>
    </div>
  );
}

export default IniciarSesion;