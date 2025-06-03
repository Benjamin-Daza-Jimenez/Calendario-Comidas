import Navbar from "../components/Navbar.tsx";
import Calendario from "../components/Calendario.tsx";
import Lista_Compras from "../components/Lista_Compras.tsx";
import "./Principal.css"

function Principal() {
  return(
    <div className="Principal">
      <nav>
          <Navbar></Navbar>
      </nav>
      <div className="Cuerpo">
        <div className="Calendarioo">
          <Calendario></Calendario>
        </div>
        <div className="Lista_Comprass">
          <Lista_Compras></Lista_Compras>
        </div>
      </div>
    </div>
  );
}
export default Principal;