import React from 'react'
// import { nanoid } from 'nanoid';


const Card = ({listUsuarios,editarstateBoton,eliminarUsuario}) => {
//     // ID PARA EL KEY RANDOM
//     const createNewTodo = (text) => ({
//      completed: false,
//      id: nanoid(),
//      text
//    });
  

    return (

        
        <div className="mt-2 w-100 px-3 ">
             
            {
                listUsuarios.map( (a) => 

                
                    
                <div key={a.id} className="alert alert-warning d-flex flex-sm-row flex-column justify-content-between" role="alert"  >
                   
                   <div className="">
                         <strong> {a.nombre}  </strong> <span className="mx-2">{a.apellido}</span><span>{a.usuario}</span>
                   </div>
                 
                                            
                   <div className="btn-group btn-group-sm" role="group" aria-label="...">
    
                       <div className="btn-group me-2" role="group" aria-label="First group">
                            <button
                                id={a.id} 
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={()=>editarstateBoton()}
                                >
                                <i id={a.id} className="fas fa-user-edit"  onClick={()=>editarstateBoton()}></i>
                            </button>
                            <button 
                                id={a.id}
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={(e)=>eliminarUsuario(e)}
                                >
                                <i id={a.id} className="fas fa-user-minus" onClick={(e)=>eliminarUsuario(e)}></i>
                            </button>
                       </div>
                   </div>
                   
                    
                </div>  
              
             

             )
            }
        </div>
    )
}

export default Card
