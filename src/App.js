// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';
import Form from "./components/Form";
import List from "./components/List";


function App() {

  const [listUsuarios, setlistUsuarios] = useState([]);

  const buscarUsuario = () => {

  }
  const eliminarUsuario = () => {

  }
  const agregarUsuario = (data) => {
    setlistUsuarios([...listUsuarios,data]);
    
  }
  const editarUsuario = () =>{

  }

  return (
    <div>
        <main>

           <section className="glass">
                            

                            <Form 
                              agregarUsuario = {agregarUsuario}
                              />                    
                       
                            <List 
                              listUsuarios = {listUsuarios}
                              />                                                        

           </section>       

        </main>

        <div className="circle1"></div>
        <div className="circle2"></div>

     
    </div>
  );
}

export default App;
