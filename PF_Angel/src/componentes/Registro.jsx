import { Fragment } from "react"
import '../componentes/Registro.css'

function Registro() {

    return (
        <>
            <div id="ayuda_glb">
                <div className="ayuda">
                    <h2 className="text_r">Nombre*</h2>
                    <input
                        className="input_mode"
                        type="text"
                        placeholder="Ingrese su nombre completo"
                    />
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Email*</h2>
                    <input
                        className="input_mode"
                        type="email"
                        placeholder="Ingrese su correo electronico"
                    />
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Telefono*</h2>
                    <input
                        className="input_mode"
                        type="tel"
                        placeholder="Ingrese su Telefono"
                    />
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Consulta*</h2>
                    <select className="input_mode">
                        <option>¿En que le podemos ayudar?</option>
                        <option>Queja</option>
                        <option>Reclamacion</option>
                        <option>Informacion</option>
                    </select>
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Mensaje*</h2>
                    <textarea
                        className="input_mode"
                        rows={4}
                        cols={50}
                        defaultValue={"Ingrese su mensaje"}
                    />
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Archivo adjunto*</h2>
                    <input className="input_mode" type="file" />
                </div>
                <div className="ayuda" id="ayuda-id">
                    <button className="input_mode">Enviar</button>
                    <button className="input_mode">Borrar</button>
                </div>
            </div>
        </>
    );
}

export default Registro;