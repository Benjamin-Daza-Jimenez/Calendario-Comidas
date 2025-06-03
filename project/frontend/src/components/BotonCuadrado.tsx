import './BotonCuadrado.css'
import { Link } from 'react-router-dom';

interface Props{
    onClick: string;
    colorLetras:string;
    link:string;
}

function BotonCuadrado(props: Props) {
  const { onClick, colorLetras,link } = props; 
  return (
    <Link to={link}><button className='Boton' style={{color:colorLetras}}>{onClick}</button></Link>
  );
}

export default BotonCuadrado;