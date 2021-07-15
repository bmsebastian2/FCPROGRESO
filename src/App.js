// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';
import Form from "./components/Form";
import List from "./components/List";


function App() {

  const [listUsuarios, setlistUsuarios] = useState([]);
  const [stateBoton, setstateBoton] = useState(false);

  const buscarUsuario = () => {

  }
  const eliminarUsuario = () => {

  }
  const agregarUsuario = (data) => {
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
                              />                                                        

           </section>       

        </main>

        <div className="circle1"></div>
        <div className="circle2"></div>

     
    </div>
  );
}

export default App;
