import React, {useState} from "react";
import '../hojas-de-estilos/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';


function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCmabio = e =>{
        setInput(e.target.value);
    };

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id:uuidv4(),
            texto:input,
            completada:false
        }

        props.onSubmit(tareaNueva);
    };


    return (
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}
            >
            <input 
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCmabio}
            />

            <button
                className="tarea-boton"
            >
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;