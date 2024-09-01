import { Fragment } from "react";
import Registro from './componentes/Registro'
import Contactos from './componentes/Contactos'
import './App.css'

function App (){
  return (
    <>
    <h1 id="title-glb">CANALES DE ATENCIÓN</h1>
    <Registro/>
    <Contactos/>
    </>
  );
}

export default App