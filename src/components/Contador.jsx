import React, { Fragment, useState} from 'react';


const Contador = () =>{
   
    const [contador, setContador] = useState(0);
    const aumentar = () => setContador(contador+1)
    const disminuir = () => setContador(contador-1)
    const resetear = () => setContador(0)


    return(
        <Fragment>
            <hr/>
            <h1>Contador</h1>
            <h1>{
                contador < 0 ? "Contador es negativo" : "Contador es positivo"
                }
            </h1>
            <h1>El valor de la variable contador es: {contador}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={resetear}>Resetear</button>


        </Fragment>
    )

}

export default Contador