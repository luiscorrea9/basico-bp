import React, { Fragment, useState} from 'react';
import { db } from '../fisebase'; 
import { collection, addDoc } from'firebase/firestore';


const Formulario = () =>{

    const[fruta, setFruta] = useState("");
    const[descripción, setDescripción] = useState("");
    const[listaFrutas, setListaFrutas] = useState("");


    const guardarFrutas = async (e) =>{
        e.preventDefault()
        try{
              const data = await addDoc(collection(db, "frutas"),{
                nombreFruta: fruta,
                nombreDescripcion: descripción
              })
               
              setListaFrutas([
                ...listaFrutas,
                {nombreFruta: fruta, nombreDescripcion: descripción, id: data.id}
              ]
                )

                setFruta("");
                setDescripción("");


        }catch(error){
            console.log(error);
        }


    }

    

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
                        <form onSubmit={guardarFrutas}>
                               <input type="text" 
                               className="form-control mb-2" 
                               placeholder='Ingrese Fruta'
                               value={fruta}
                               onchange={(e) => setFruta(e.target.value)}
                               />
                               <input type="text" 
                               className="form-control mb-2" 
                               placeholder='Ingrese Descripción'
                               value={descripción}
                               onchange={(e) => setDescripción(e.target.value)}
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