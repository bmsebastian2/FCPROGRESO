import React from 'react'
import img from '../style/Imagen'

const Card = ({listUsuarios}) => {
    console.log('cards');
    console.log(listUsuarios);
    return (
        <div>
            {listUsuarios.map((a)=> 
             
            <div className="">
                
                <div className="">

                </div>

                <div className="">
                    <p>s</p>
                </div>

                <div className="">
                   <img className="rounded-start imagenListCard" src= {img.edit} alt="" />
                </div>

            </div>
              
             

             )}
        </div>
    )
}

export default Card
