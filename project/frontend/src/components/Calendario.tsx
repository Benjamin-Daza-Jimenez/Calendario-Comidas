import './Calendario.css';
import { Link } from 'react-router-dom';

function Calendario() {
  return (
    <div className="Calendario">
      <table>
        {/*Header*/}
        <thead>
          <tr>
            <th className = "Vacio"></th>
            <th className= "Dia">Lunes</th>
            <th className= "Dia">Martes</th>
            <th className= "Dia">Miércoles</th>
            <th className= "Dia">Jueves</th>
            <th className= "Dia">Viernes</th>
            <th className= "Dia">Sábado</th>
            <th className= "Dia">Domingo</th>
          </tr>
        </thead>
        {/*Semana 1*/}
        <tbody>
          {/*Desayuno*/}
          <tr>
            <td className='PrimeraCasilla' rowSpan={3}>
              <div className='Contenedor'>
                <div className='Semana'><a>Semana 1</a></div>
                <div className='ContenedorComida'>
                  <div className='Desayuno'><a>Desayuno</a></div>
                  <div className='Almuerzo'><a>Almuerzo</a></div>
                  <div className='Cena'><a>Cena</a></div>
                </div>
              </div>
            </td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
          </tr>
          {/*Almuerzo*/}
          <tr>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
          </tr>
          {/*Cena*/}
          <tr>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
          </tr>
        </tbody>
        {/*Semana 2*/}
        <tbody>
          {/*Desayuno*/}
          <tr>
            <td className='PrimeraCasilla' rowSpan={3}>
              <div className='Contenedor'>
                <div className='Semana'><a>Semana 2</a></div>
                <div className='ContenedorComida'>
                  <div className='Desayuno'><a>Desayuno</a></div>
                  <div className='Almuerzo'><a>Almuerzo</a></div>
                  <div className='Cena'><a>Cena</a></div>
                </div>
              </div>
            </td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-desayuno'><div className='ContenedorCasilla'><button className='BotonD'></button></div></Link></td>
          </tr>
          {/*Almuerzo*/}
          <tr>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-almuerzo'><div className='ContenedorCasilla'><button className='BotonA'></button></div></Link></td>
          </tr>
          {/*Cena*/}
          <tr>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
            <td className='Casilla'><Link to='/filtro-recetas/recetas-cena'><div className='ContenedorCasilla'><button className='BotonC'></button></div></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendario;