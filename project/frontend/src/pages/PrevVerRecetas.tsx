import Navbar from "../components/Navbar.tsx";
import FiltrosPrev from "../components/FiltrosPrev.tsx";
import './PrevVerRecetas.css';

function PrevVerRecetas() {
  return (
    <div className="PrevVerRecetas">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="Cuerpo">
        <FiltrosPrev></FiltrosPrev>
      </div>
    </div>
  );
}

export default PrevVerRecetas;