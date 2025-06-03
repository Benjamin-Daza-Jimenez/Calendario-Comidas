import { useState } from 'react';
import './Formulario_Registro.css'

function Formulario_Registro(){
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');


    return(
        <div className="Formulario_Registro">
            <form className='FormR'>
                <h2>Crear Cuenta</h2>
                <div>
                    <label>Nombre Completo:</label>
                    <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div>
                    <label>Correo Electrónico:</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type='password' required/>
                </div>
                <div>
                    <label>Confirmar Contraseña:</label>
                    <input type='password' required/>
                </div>
                <div className='ContenedorBoton_R'>
                    <button type='submit'>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario_Registro;