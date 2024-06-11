import { useState } from "react";
import "./campo.css";

const Campo = (props) => {
  /* los props son datos que nosotros le vamos a poder enviar a los componentes  */
  const placeholderModificado = `${props.placeholder}...`
  //   sirve solo para agregar los puntos ... finales a los input

  // destructuracion 
  const {type = "text"} = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return  <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      {/* accede al objeto props a su llave titulo, 
        .toUpperCase() sirve para poner las letras en mayusculas en este caso las del titulo */}
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type= {type}
      />
    </div>
}

export default Campo
