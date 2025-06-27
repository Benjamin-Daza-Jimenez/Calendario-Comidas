import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import CuadroComida2 from "../components/CuadroComida2";
import './RecetasAlmuerzo.css';

function RecetasAlmuerzo() {

  {/* BEGIN PRUEBA UNITARIA */}
  const [mostrar, setMostrar] = useState<boolean>(true);

  useEffect(() => {
    const guardado = localStorage.getItem('mostrar2');
    if (guardado !== null) {
      setMostrar(guardado === 'true');
    }
  }, []);
  {/* END PRUEBA UNITARIA */}
  
  return (
    <div className="RecetasAlmuerzo">
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="Cuerpoo">
        
        {/* BEGIN PRUEBA UNITARIA */}
        <div className='Cuadroo'>
          {mostrar ? <></> : 
            <CuadroComida2></CuadroComida2>
          }
        </div>
      </div>
    </div>
  );
}

export default RecetasAlmuerzo;