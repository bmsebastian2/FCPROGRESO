import React from 'react'



const Card = ({listUsuarios,editarstateBoton,eliminarUsuario}) => {

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
                                onClick={(e)=>editarstateBoton(e)}
                                >
                                <i id={a.id} className="fas fa-user-edit"  onClick={(e)=>editarstateBoton(e)}></i>
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
