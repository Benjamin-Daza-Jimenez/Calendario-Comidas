import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Formulario.css'

interface Ingrediente{
  id: number; // Para identificar cada fila de forma única en React
  nombre: string;
  cantidad: number | '';
  medida: string;
}

function Formulario() {


    {/* BEGIN PRUEBA UNITARIA */}
    const navigate = useNavigate();
    const [mostrar2, setMostrar2] = useState<boolean | undefined>(undefined);

    // Leer desde localStorage al cargar
    useEffect(() => {
        const guardado2 = localStorage.getItem('mostrar2');
        if (guardado2 !== null) {
        setMostrar2(guardado2 === 'true');
        } else {
        setMostrar2(true); // valor por defecto si no hay nada guardado
        }
    }, []);

    // Guardar cada vez que cambie
    useEffect(() => {
        if (mostrar2 !== undefined) {
        localStorage.setItem('mostrar2', String(mostrar2));
        }
    }, [mostrar2]);

    const manejarClick = () => {
        const nuevoEstado2 = !mostrar2;
        setMostrar2(nuevoEstado2);
        localStorage.setItem('mostrar2', String(nuevoEstado2)); // opcional, ya lo hace useEffect
        navigate('/filtro-recetas/recetas-almuerzo');
    };



    {/* END PRUEBA UNITARIA */}


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



    {/* BEGIN PRUEBA UNITARIA */}
    if (mostrar2 === undefined) return null; // Espera a que cargue localStorage
    {/* END PRUEBA UNITARIA */}




    return(
        <div className="Formulario">
            <div className='Form'>
                <form className='FormInterno'>
                    <div className='Titulo'>Nueva Receta</div>
                    <div className='ContenedorArriba'>
                        <div className='ContenedorNombre'>
                            <div>
                                <label>Nombre de la Receta:</label>
                                <input className='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='Categoria'>
                            <div className='CLabel'>
                                <label>Categoría:</label>
                            </div>
                            <div className='CCheck'>
                                <div>
                                    <input type="checkbox"></input><a>Desayuno</a>
                                </div>
                                <div>
                                    <input type="checkbox"></input><a>Almuerzo</a>
                                </div>
                                <div>
                                    <input type="checkbox"></input><a>Cena</a>
                                </div>
                            </div>
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
                                    <option value="L">L</option>
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


                        {/* BEGIN PRUEBA UNITARIA */}
                        {mostrar2 ? 
                            <button type='submit' onClick={manejarClick}>Guardar Receta</button>
                        :
                            <button type='submit' onClick={manejarClick}>Guardar Receta</button>
                        }
                        {/* END PRUEBA UNITARIA */}
                        

                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;