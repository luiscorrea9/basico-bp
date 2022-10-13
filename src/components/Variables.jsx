
import React, { Fragment } from 'react';

const Variables = () =>{
    const saludo = "Hola mundo";
    const imagen = "https://picsum.photos/300";
    const texto_alt = "Esto es una image de picsum aleatoria";

    return(
        <Fragment>
            <h1>{saludo}</h1>
            <img src={imagen} alt={texto_alt} />

        </Fragment>
    )

}

export default Variables