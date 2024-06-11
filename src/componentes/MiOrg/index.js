import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
// el Estado - hooks: es una funcionalidad que nos ayudan a trabajar en el comportamiento de react
// el usesState= utiliza el estado 
// de que forma declaramos que un componente tiene un estado, tenemos que utilizar la funcion useState
// const [nombreVariable, funcionActualiza] = useState(valorInicial)
//   const [nombre, actualizarNombre] = useState("Mary")
    console.log(props);
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg