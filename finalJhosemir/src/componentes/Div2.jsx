import React from 'react';
import info from '../imagenes/pizza_americana.jpg';

function Div2() {
    return (
        <>
            <div className="info">
                <img id="pizza" src={info} alt="" />
                <h3>Pizza Americana</h3>
                <p>
                    La historia de la pizza afirma que proviene de Italia, en concreto de
                    Nápoles en el siglo XVIII. Los inmigrantes italianos popularizaron la pizza
                    en Estados Unidos y en muchos barrios de inmigrantes era una comida muy
                    popular signo identificador de su origen italiano.
                </p>
            </div>

        </>
    )
}
export default Div2
