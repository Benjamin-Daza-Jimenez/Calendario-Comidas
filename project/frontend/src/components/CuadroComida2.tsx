import './CuadroComida2.css';
import { Link } from 'react-router-dom';

function CuadroComida2() {
  return (
    <div className="CuadroComida2">
        <div className='NombreC'>Papas Fritas</div>
        <div className='IngredienteC'>
          <div className='ITitulo'>Ingredientes:</div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>1</div>
              <div>kg.</div>
            </div>
            <div>Papas</div>
          </div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>1</div>
              <div>L.</div>
            </div>
            <div>Aceite</div>
          </div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>30</div>
              <div>gr.</div>
            </div>
            <div>Sal</div>
          </div>
        </div>
        <div className='InstruccionesC'>
          <div className='ITitulo'>Instrucciones:</div>
          <div>...</div>
        </div>
        <div className='CuadroBotonesComida'>
          <button className='BotonVerMas'>Ver Más</button>
          <Link to={"/calendario"}><button className='BotonAgregar'>Agregar</button></Link>
        </div>
    </div>
  );
}

export default CuadroComida2;