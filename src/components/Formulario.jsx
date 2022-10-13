import React, { Fragment } from 'react';

const Formulario = () =>{
    

    return(
        <Fragment>
            <div className="container">
                <h1 className="text-center">CRÚD BÁSICO BUENAS PRÁCTICAS</h1>
                <hr/>
                <div className='row'>
                    <div className="col-8">
                        <h4 className="text-center">Listado de frutas</h4>
                        <ul className="list-group">
                            {

                            }
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-center">
                             Agregar Frutas
                        </h4>
                        <form>
                               <input type="text" 
                               className="form-control mb-2" 
                               placeholder='Ingrese Fruta'
                               />
                               <input type="text" 
                               className="form-control mb-2" 
                               placeholder='Ingrese Descripción'
                               />

                               <button className='btn btn-primary btn-block' type='submit' >Agregar</button>
                        </form>
                    </div>

                </div>
                
            </div> 

        </Fragment>
    )

}

export default Formulario