import React from 'react';

function Formulario() {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const nombresInput = document.getElementById('nombres');
        const correoInput = document.getElementById('correo');
    
        const nombresValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombresInput.value);
        const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoInput.value);
    
        if (nombresValido && correoValido) {
          alert('¡Inscripción exitosa!');
        } else {
          alert('Por favor, ingresa datos válidos.');
        }
    }
    return (
        <>
            <div className="registro-glb">
                <h3>CONTACTANOS PARA PODER LLEVAR UNA DELIPIZZA A TU CASA</h3>
                <form id="inscripcion" className="registro">
                    <h4>Nombres y Apellidos</h4>
                    <input
                        id="nombres"
                        className="type"
                        type="text"
                        placeholder="Nombres y apellidos"
                        required=""
                        pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
                    />
                    <h4>Correo electronico</h4>
                    <input
                        id="correo"
                        className="type"
                        type="email"
                        placeholder="ejemplo@email.com"
                        required=""
                        pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
                    />
                    <h4>Haz tu pedido y disfruta de la mejor pizza</h4>
                    <input
                        id="descripcion"
                        className="type"
                        type="text"
                        placeholder="Describe tu pedido aqui"
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}
export default Formulario
