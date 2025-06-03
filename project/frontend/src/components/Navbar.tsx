import './Navbar.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return(
    <nav className="navbar">
      <div className='logo'><Link to="/calendario"><img className="img" src={logo} alt="Logo"></img></Link></div>
      <div className="navdiv">
        <ul>
          <li className='li'><Link to="/calendario">Inicio</Link></li>
          <li className='li'><Link to="/filtro-recetas">Recetas Guardadas</Link></li>
          <li className='li'><Link to="/nueva-receta">Nueva Receta</Link></li>
        </ul>
        <ul>
          <button className='button'><a href="/iniciar-sesion">Iniciar sesión</a></button>
          <button className='button'><a href="/registro">Registrarse</a></button>
        </ul>
      </div>

    </nav>
  );
}
export default Navbar;