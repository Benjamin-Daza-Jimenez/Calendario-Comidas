import { useState } from 'react';
import './Formulario_Inicio.css'

function Formulario_Inicio() {
    const [correo, setCorreo] = useState('');


    return(
        <div className="Formulario_Inicio">
            <form className='FormI'>
                <h2>Iniciar Sesión</h2>
                <div>
                    <label>Correo Electrónico:</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type='password' required/>
                </div>
                <div className='ContenedorB'>
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario_Inicio;