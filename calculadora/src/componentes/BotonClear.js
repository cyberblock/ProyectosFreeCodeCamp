import React from 'react';
import '../hodas-de-estilo/BotonClear.css'


const BotonClear = (props) =>(
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);


export default BotonClear;