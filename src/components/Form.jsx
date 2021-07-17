import React from 'react';
import img from '../style/Imagen';
import FormInput from './FormInput';


const Form = ({agregarUsuario,stateBoton,editarstateBoton,objeto}) => {
    return (
        <div className="containerForm ">
            
            <div className=" ">               
                
                    <img className = "" src={img.progreso} alt="" id="logo"/>
                    <h6 id="textClub">Club Atlético Progreso</h6>
                    <p>El Club Atlético Progreso </p>
                
            </div>

            <div className=" ">
                    <FormInput 
                        agregarUsuario = {agregarUsuario}
                        stateBoton = {stateBoton}
                        editarstateBoton = {editarstateBoton}
                        objeto = {objeto}
                    />
            </div>
                    

          
          
        </div>
    )
}

export default Form
