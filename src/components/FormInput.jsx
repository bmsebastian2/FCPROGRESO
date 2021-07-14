import React from 'react'
import { useForm } from "react-hook-form";

const FormInput = ({agregarUsuario}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        agregarUsuario(data);
        
    };

    return (
        <div>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input  
                    className = "form-control  text-center"
                    type="text"
                    placeholder="Ingrese Nombre" 
                    name = "nombre"
                    {...register('nombre', {required : true})}
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
                    name = ""
                    {...register('usuario')}
                    />
                    

                    <div className="my-4 ">
                        <h6>Ingresar Nuevo Jugador</h6>
                        {/* <img className=""src={img.pelota} alt="" id="logoPelota"/> */}
                        <button className="btn btn-danger mt-3" type="submit">Ingresar</button>
                    </div>
                </form>
        </div>
    )
}

export default FormInput
