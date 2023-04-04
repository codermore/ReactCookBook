import React, { useState } from 'react';

const OperadorDePropagacion = (props) => {
    const estadoIncial = [
        { id: 1, texto: 'tarea 1' }
    ]

    const [lista, setLista] = useState(estadoIncial)

    const agregarElemento = () => {
        setLista([
            ...lista,
            { id: lista.length + 1, texto: 'tarea ' + (lista.length + 1) }
        ])
    }

    const reiniciarLista = () => {
        setLista(estadoIncial)
    }


    return (
        <>
            {
                lista.map((item, index) =>
                    <h4 key={item.id}>{item.texto}</h4>
                )
            }
            
            <button 
            onClick={() => agregarElemento()}
            className={props.stilosBotonIndex}
            >
                Agregar
            </button>
            <button 
            onClick={() => reiniciarLista()}
            className={props.stilosBotonIndex}
            >
                Reinciar
            </button>

        </>
    )
}

export default OperadorDePropagacion