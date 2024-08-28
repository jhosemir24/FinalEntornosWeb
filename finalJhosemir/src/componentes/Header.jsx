import { Fragment } from "react";
import logo from '../imagenes/logo.png'

function Header() {
    return (
        <>
            <div id='header'>
                <div className="logo-container">
                    <img src={logo} alt="Mi Logotipo" id="logo" />
                </div>
                <div id="tiempo_glb">
                    <div className="tiempo2" id="fecha" />
                    <div className="tiempo2" id="tiempo" />
                </div>
            </div>
        </>
    );
}
export default Header;
