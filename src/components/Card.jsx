import React from 'react'
import { nanoid } from 'nanoid';


const Card = ({listUsuarios,editarstateBoton}) => {
    // ID PARA EL KEY RANDOM
    const createNewTodo = (text) => ({
     completed: false,
     id: nanoid(),
     text
   });
 

    return (

        
        <div className="mt-2 w-100 px-3 ">
            {listUsuarios.map((a)=> 
                                             
                <div key={createNewTodo().id}className="alert alert-warning d-flex flex-sm-row flex-column justify-content-between" role="alert"  >
                   
                   <div className="">
                         <strong> {a.nombre}  </strong> <span className="mx-2">{a.apellido}</span><span>{a.usuario}</span>
                   </div>
                 
                                             
                   <div className="btn-group btn-group-sm" role="group" aria-label="...">
    
                       <div className="btn-group me-2" role="group" aria-label="First group">
                            <button 
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={()=>editarstateBoton()}
                                >
                                <i className="fas fa-user-edit"></i></button>
                            <button 
                                type="button" 
                                className="btn btn-outline-secondary"
                                
                                >
                                <i className="fas fa-user-minus"></i></button>
                       </div>
                   </div>
                   
                    
                </div>

           
              
             

             )}
        </div>
    )
}

export default Card
