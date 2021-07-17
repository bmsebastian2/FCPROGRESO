import React from 'react';
import Card from './Card';

const List = ({listUsuarios,editarstateBoton,eliminarUsuario}) => {
    return (
        <div className="list">
           
           <div className="encabezadoList mt-2 rounded py-2 d-flex justify-content-center">             
               <h1 id="h1ListJugadores" className="ms-3">Lista de: <span id="jugadores" className="text-warning" >Jugadores</span></h1>              
           </div>
                     
          
                {((listUsuarios.length>0))?
                    <Card 
                        listUsuarios={listUsuarios}
                        editarstateBoton = {editarstateBoton}
                        eliminarUsuario = {eliminarUsuario}
                    />
                    :<p>No estisten registros....</p>
                }     
           </div>
        
       
    )
}

export default List
