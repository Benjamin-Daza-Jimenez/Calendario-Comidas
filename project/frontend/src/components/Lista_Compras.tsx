import { useEffect, useState } from 'react';
import "./Lista_Compras.css"

function Lista_Compras() {

  {/* BEGIN PRUEBA UNITARIA */}
  const [mostrar, setMostrar] = useState<boolean>(true);

  useEffect(() => {
    const guardado = localStorage.getItem('mostrar');
    if (guardado !== null) {
      setMostrar(guardado === 'true');
    }
  }, []);
  {/* END PRUEBA UNITARIA */}

  return (
    <div className="Lista_Compras">
        <div className="top">
          <a>Lista de Compras</a>
        </div>
        <div className="down">
          <a style={{ color: 'black', fontWeight: 'bold' }}>Semana 1</a>

          {/* BEGIN PRUEBA UNITARIA */}
          {mostrar ? <></> : 
          <div>
            <a style={{ color: 'black'}}>1kg Harina</a>
            <a style={{ color: 'black'}}>120gr Manteca</a>
            <a style={{ color: 'black'}}>550cc Agua</a>
            <a style={{ color: 'black'}}>20gr Sal</a>
            <a style={{ color: 'black'}}>10gr Levadura</a>
          </div>
          }
          {/* END PRUEBA UNITARIA */}

        </div>
        <div className="down">
          <a style={{ color: 'black', fontWeight: 'bold' }}>Semana 2</a>
        </div>
    </div>
  );
}

export default Lista_Compras;