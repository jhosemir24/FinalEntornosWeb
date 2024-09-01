import { Fragment } from "react";
import Registro from './componentes/Registro'
import Contactos from './componentes/Contactos'
import fondo from './image/contac_fondo.jpg'
import './App.css'

function App (){
  return (
    <>
    <h1 id="title-glb">CANALES DE ATENCIÓN</h1>
    <img id="fondo_leve" src={fondo} alt="" />
    <Registro/>
    <Contactos/>
    </>
  );
}

export default App