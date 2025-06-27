import { useState, useEffect } from 'react';
import './Calendario.css';
import { Link, useNavigate } from 'react-router-dom';

function Calendario() {


  {/* BEGIN PRUEBA UNITARIA */}
  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState<boolean | undefined>(undefined);

  // Leer desde localStorage al cargar
  useEffect(() => {
    const guardado = localStorage.getItem('mostrar');
    if (guardado !== null) {
      setMostrar(guardado === 'true');
    } else {
      setMostrar(true); // valor por defecto si no hay nada guardado
    }
  }, []);

  // Guardar cada vez que cambie
  useEffect(() => {
    if (mostrar !== undefined) {
      localStorage.setItem('mostrar', String(mostrar));
    }
  }, [mostrar]);

  const manejarClick = () => {
    const nuevoEstado = !mostrar;
    setMostrar(nuevoEstado);
    localStorage.setItem('mostrar', String(nuevoEstado)); // opcional, ya lo hace useEffect
    navigate('/filtro-recetas/recetas-desayuno');
  };
  const manejarClick2 = () => {
    const nuevoEstado = !mostrar;
    setMostrar(nuevoEstado);
    localStorage.setItem('mostrar', String(nuevoEstado)); // opcional, ya lo hace useEffect
    navigate('/temp'); // una ruta temporal o inexistente
    setTimeout(() => navigate('/calendario'), 1);
  };

  if (mostrar === undefined) return null; // Espera a que cargue localStorage

  {/* END PRUEBA UNITARIA */}


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
            {mostrar ? 
              <td className='Casilla'><div className='ContenedorCasilla'><button className='BotonD' onClick={manejarClick}><a style={{ color: 'black', fontWeight: 'bold' }}></a></button></div></td>
            :
              <td className='Casilla'>
                <div className='ContenedorCasilla'>

                  <div className='B' style={{background:'#f5d4a4', flexDirection:'column', width:'100%', height:'100%', }}>
                    <div style={{justifyContent:'flex-end', display:'flex'}}>
                        <button style={{border:'1px solid black', borderRadius:'20%', height:'20px', width:'20px', background:'red', padding:'0'}} onClick={manejarClick2}>
                          <a style={{ color: 'black'}}>
                            X
                          </a>
                        </button>
                    </div>
                    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center',}}>
                      <a style={{ color: 'black', fontWeight: 'bold', textAlign: 'center'}}>
                        Pan Amasado
                      </a>       
                    </div>
                  </div>

                </div>
              </td>
            }
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