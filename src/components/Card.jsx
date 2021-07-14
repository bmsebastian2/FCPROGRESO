import React from 'react'
import img from '../style/Imagen'

const Card = ({listUsuarios}) => {
    console.log('cards');
    console.log(listUsuarios);
    return (
        <div className="mt-2 w-100 px-3 ">
            {listUsuarios.map((a)=> 
                                             
                <div class="alert alert-warning d-flex flex-sm-row flex-column justify-content-between" role="alert"  >
                   
                   <div className="">
                         <strong> {a.nombre}  </strong> <span className="mx-2">{a.apellido}</span><span>{a.usuario}</span>
                   </div>
                 
                                             
                   <div class="btn-group btn-group-sm" role="group" aria-label="...">
    
                       <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-outline-secondary"><i class="fas fa-user-edit"></i></button>
                            <button type="button" class="btn btn-outline-secondary"><i class="fas fa-user-minus"></i></button>
                       </div>
                   </div>
                   
                    
                </div>

           
              
             

             )}
        </div>
    )
}

export default Card
