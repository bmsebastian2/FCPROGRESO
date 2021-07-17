// import logo from './logo.svg';
// import './App.css';
import { nanoid } from 'nanoid';
import React,{useState} from 'react';
import Form from "./components/Form";
import List from "./components/List";

function App() {

    let inputNombre = document.getElementsByName('nombre');
    let inputApellido = document.getElementsByName('apellido');
    let inputUsuario = document.getElementsByName('usuario');
    //  ID PARA EL KEY RANDOM
     const createNewTodo = (text) => ({
      completed: false,
      id: nanoid(),
      text
    });

  const [listUsuarios, setlistUsuarios] = useState([]);
  const [stateBoton, setstateBoton] = useState(false);
  const [objeto, setObjetos] = useState('');
  
  const eliminarUsuario = (e) => {
    const lisNew = listUsuarios.filter(a=>a.id!=e.target.id);
    setlistUsuarios(lisNew);
    setObjetos('');
    inputNombre[0].value = '';
    inputApellido[0].value = '';
    inputUsuario[0].value = ''; 
    
  }
  const agregarUsuario = (data) => {
    if(objeto){
     
        const lisNew = listUsuarios.filter(a=>a.id!==objeto.id);
        data.id = objeto.id;       
        const prueba = listUsuarios.map(a => (a.id!==objeto.id)?a:data);
        
        setlistUsuarios(prueba);
        setObjetos('');
        setstateBoton(!stateBoton);
       
    }else{
      data.id = createNewTodo().id;
     setlistUsuarios([...listUsuarios,data]);
    }
    
    
  }
  const editarUsuario = () =>{

  }
  const editarstateBoton = (e) =>{
       let ob ='';
       ob = ( listUsuarios.find(a=>a.id === e.target.id));
       if(ob!=null){
        setObjetos(ob);      
        inputNombre[0].value = ob.nombre;
        inputApellido[0].value = ob.apellido;
        inputUsuario[0].value = ob.usuario; 
      }
       setstateBoton(!stateBoton);
   
  }

  return (
    <div>
        <main>

           <section className="glass">
                            

                            <Form 
                              agregarUsuario = {agregarUsuario}
                              stateBoton = {stateBoton}
                              editarstateBoton = {editarstateBoton}
                              objeto = {objeto}
                              />                    
                       
                            <List 
                              listUsuarios = {listUsuarios} 
                              editarstateBoton={editarstateBoton}
                              eliminarUsuario = {eliminarUsuario}
                              />                                                        

           </section>       

        </main>

        <div className="circle1"></div>
        <div className="circle2"></div>
      
     
    </div>
  );
}

export default App;
