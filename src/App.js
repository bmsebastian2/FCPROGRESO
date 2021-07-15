// import logo from './logo.svg';
// import './App.css';
import { nanoid } from 'nanoid';
import React,{useState} from 'react';
import Form from "./components/Form";
import List from "./components/List";

function App() {

//  ID PARA EL KEY RANDOM
     const createNewTodo = (text) => ({
      completed: false,
      id: nanoid(),
      text
    });

  const [listUsuarios, setlistUsuarios] = useState([]);
  const [stateBoton, setstateBoton] = useState(false);

  const buscarUsuario = () => {

  }
  const eliminarUsuario = (e) => {
    const lisNew = listUsuarios.filter(a=>a.id!=e.target.id);
    setlistUsuarios(lisNew);
    

  }
  const agregarUsuario = (data) => {
    data.id = createNewTodo().id;
    setlistUsuarios([...listUsuarios,data]);
    
  }
  const editarUsuario = () =>{

  }
  const editarstateBoton = () =>{
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
