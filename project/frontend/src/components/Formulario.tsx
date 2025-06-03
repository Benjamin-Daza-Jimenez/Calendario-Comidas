import { useState, useRef } from 'react';
import './Formulario.css'

interface Ingrediente{
  id: number; // Para identificar cada fila de forma única en React
  nombre: string;
  cantidad: number | '';
  medida: string;
}

function Formulario() {
    const nextId = useRef(0);

    const [ingredientes, setIngredientes] = useState<Ingrediente[]>(() => {
        nextId.current = 1; // Asegura que el primer ID sea 1 si empiezas en 0
        return [{ id: 0, nombre: '', cantidad: '', medida: 'kg' }];
    });

    // Función para manejar los cambios en los inputs de cada ingrediente
    const handleInputChange = (
        id: number,
        field: keyof Ingrediente,
        value: string | number
    ) => {
        setIngredientes(prevIngredientes =>
        prevIngredientes.map(ing =>
            ing.id === id ? { ...ing, [field]: value } : ing
        )
        );
    };
    
    // Función para agregar un nuevo ingrediente
    const handleAddIngrediente = () => {
        setIngredientes(prevIngredientes => {
        // Incrementa el contador y úsalo para el nuevo ID
        const newId = nextId.current++; // Usa el valor actual y luego lo incrementa
        return [
            ...prevIngredientes,
            { id: newId, nombre: '', cantidad: '', medida: 'kg' } // Nueva fila con ID incremental
        ];
        });
    };
  
    //Variables que guardan el nombre
    const [nombre, setNombre] = useState('');

    return(
        <div className="Formulario">
            <div className='Form'>
                <form className='FormInterno'>
                    <div className='Titulo'>Nueva Receta</div>
                    <div className='ContenedorNombre'>
                        <div>
                            <label>Nombre de la Receta:</label>
                            <input className='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                        </div>
                    </div>
                    {/*Ingredientes*/}
                    <div className='Ingredientes'>
                        <div className='EncabezadoTabla'>
                            <div className='item nombre'>Nombre Ingrediente</div>
                            <div className='item cantidad'>Cantidad</div>
                            <div className='item medida'>Medida</div>
                        </div>
                        {ingredientes.map(ingrediente => (
                        <div className='CuerpoTabla' key={ingrediente.id}>
                            <div className='fila nombre'>
                                <input type='text' value={ingrediente.nombre} onChange={(e) => handleInputChange(ingrediente.id, 'nombre', e.target.value)} required/>
                            </div>
                            <div className='fila cantidad'>
                                <input type='number' value={ingrediente.cantidad} min={1} max={999} onChange={(e) => handleInputChange(ingrediente.id, 'cantidad', parseFloat(e.target.value) || '')} required/>
                            </div>
                            <div className='fila medida'>
                                <select value={ingrediente.medida} onChange={(e) => handleInputChange(ingrediente.id, 'medida', e.target.value)}>
                                    <option value="kg">kg</option>
                                    <option value="g">g</option>
                                    <option value="ml">ml</option>
                                </select>
                            </div>
                        </div>
                        ))}
                        {/*Agregar Ingrediente*/}
                        <div className='Agregar'>
                            <button type='button' onClick={handleAddIngrediente}>+</button>
                        </div>
                    </div>
                    
                    {/*Instrucciones*/}
                    <div className='Instrucciones'>
                        <label>Instrucciones:</label>
                        <div>
                            <textarea rows={5}/>
                        </div>
                    </div>
                    {/*Guardar receta*/}
                    <div className='ContenedorBoton'>
                        <button type='submit'>Guardar Receta</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;