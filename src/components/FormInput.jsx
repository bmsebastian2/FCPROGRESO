import React from 'react'
import { useForm } from "react-hook-form";


const FormInput = ({agregarUsuario,stateBoton,editarstateBoton,objeto}) => {

    const { register, handleSubmit, clearErrors, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data,e) => {   
        console.log(data)     ;
        agregarUsuario(data);
        e.target.reset();
        
    };
    const botonAgregarEditar = () => {
        if(stateBoton){
            return (
                <>  
                
                    <h6>Ingresar <span className="text-primary" type="button" onClick={()=>editarstateBoton()}>Nuevo Jugador </span></h6>
                    
                    <button className="btn btn-warning mt-3" type="" >Editar</button>                    
                </>              
            )
        }else{
            return (
                <>                   
                    <button className="btn btn-danger mt-3" type="submit">Ingresar</button>
                </>
            )
        }

    }  
      
    return (
        <div>
           
             <form action="" onSubmit = {handleSubmit(onSubmit)} id="formulario">
                    <input  
                        className = "form-control  text-center"
                        type="text"
                        placeholder="Ingrese Nombre" 
                        name = "nombre"
                        {...register('nombre', {required : true})}
                        ref={input => input && input.focus()}
                        // onChange={escribeCambio}
                    />
                    {errors.nombre && <span>El nombre es requerido</span>}
                    <input  
                        className=  "form-control mt-4 text-center"
                        type="text"
                        placeholder="Ingrese Apellido" 
                        name = "apellido"
                        {...register('apellido', {required : true})}
                       
                     />
                     {errors.apellido && <span>El apellido es requerido</span>}
                    <input  
                        className = "form-control mt-4 text-center"
                        type="text"
                        placeholder="Ingrese Usuario" 
                        name = "usuario"
                    {...register('usuario')}
                    />             
                    

                    <div className="my-4 ">

                    {
                     
                        botonAgregarEditar()
                       
                    }
                    
                   
                    
                    </div>
                </form>
        </div>
    )
}

export default FormInput
