import Boton from "../components/BotonCuadrado.tsx";
import './FiltrosPrev.css';

function FiltrosPrev() {
  return (
    <div className="Cuerpo">
        <div className="Boton1">
          <Boton onClick="Desayuno" colorLetras="#8e4102" link='recetas-desayuno'></Boton>
        </div>
        <div className="Boton2">
          <Boton onClick="Almuerzo" colorLetras="#005804" link='recetas-almuerzo'></Boton>
        </div>
        <div className="Boton3">
          <Boton onClick="Cena" colorLetras="#00237b" link='recetas-cena'></Boton>
        </div>
    </div>
  );
}

export default FiltrosPrev;