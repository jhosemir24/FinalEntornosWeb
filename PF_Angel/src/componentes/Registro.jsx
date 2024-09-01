import { Fragment , useState} from "react"
import '../componentes/Registro.css'

function Registro() {
    const [formData, setFormData] = useState({
        nombres: "",
        email: "",
        telefono: "",
        consulta: "",
        mensaje: "",
    });

    const [error, setError] = useState(""); // Estado para el mensaje de error

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos
        if (!formData.nombres && !formData.email && !formData.telefono) {
            setError("Por favor, completa los campos obligatorios.");
            return;
        }

        // Aquí puedes realizar otras validaciones o acciones adicionales

        console.log("Formulario enviado:", formData);
    };

    return (
        <>
            <form id="ayuda_glb" onSubmit={handleSubmit}>
                <div className="ayuda">
                    <h2 className="text_r">Nombre*</h2>
                    <input
                        id="nombres"
                        className="input_mode"
                        type="text"
                        placeholder="Ingrese su nombre completo"
                    />
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Email*</h2>
                    <input
                        id="email"
                        className="input_mode"
                        type="email"
                        placeholder="Ingrese su correo electronico"
                    />
                </div>
                <div className="ayuda">
                    <h2 className="text_r">Telefono*</h2>
                    <input
                        id="telefono"
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
                <p className="error-message">{error}</p>
                <div className="ayuda" id="ayuda-id">
                    <button type='submit' className="input_mode">Enviar</button>
                    <button type='reset' className="input_mode">Borrar</button>
                </div>
            </form>
        </>
    );
}

export default Registro;