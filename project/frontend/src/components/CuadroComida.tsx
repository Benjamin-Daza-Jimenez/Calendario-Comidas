import './CuadroComida.css';
import { Link } from 'react-router-dom';

function CuadroComida() {
  return (
    <div className="CuadroComida">
        <div className='NombreC'>Pan Amasado</div>
        <div className='IngredienteC'>
          <div className='ITitulo'>Ingredientes:</div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>1</div>
              <div>kg.</div>
            </div>
            <div>Harina</div>
          </div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>120</div>
              <div>gr.</div>
            </div>
            <div>Manteca</div>
          </div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>550</div>
              <div>cc.</div>
            </div>
            <div>Agua</div>
          </div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>20</div>
              <div>gr.</div>
            </div>
            <div>Sal</div>
          </div>
          <div className='Ingredientee'>
            <div className='IIzq'>
              <div>...</div>
            </div>
          </div>
        </div>
        <div className='InstruccionesC'>
          <div className='ITitulo'>Instrucciones:</div>
          <div>En un bol haga un volcán con la harina, agregue la sal por la orilla...</div>
        </div>
        <div className='CuadroBotonesComida'>
          <button className='BotonVerMas'>Ver Más</button>
          <Link to={"/calendario"}><button className='BotonAgregar'>Agregar</button></Link>
        </div>
    </div>
  );
}

export default CuadroComida;