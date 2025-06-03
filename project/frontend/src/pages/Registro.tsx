import Navbar from "../components/Navbar";
import Formulario_Registro from "../components/Formulario_Registro";
import './Registro.css';

function Registro() {
  return (
    <div className="Registro">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="Cuerpo">
        <Formulario_Registro></Formulario_Registro>
      </div>
    </div>
  );
}

export default Registro;