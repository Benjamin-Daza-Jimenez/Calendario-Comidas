import Navbar from "../components/Navbar";
import CuadroComida from "../components/CuadroComida";
import './RecetasDesayuno.css';

function RecetasDesayuno() {
  return (
    <div className="RecetasDesayuno">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="Cuerpoo">
        <div className="Cuadroo">
          <CuadroComida></CuadroComida>
        </div>
      </div>
    </div>
  );
}

export default RecetasDesayuno;