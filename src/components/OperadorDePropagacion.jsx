import React, { useState } from 'react'

const OperadorDePropagacion = () => {
    const estadoIncial = [
        { id: 1, texto: 'tarea 1' },
        { id: 2, texto: 'tarea 2' }
    ]

    const [lista, setLista] = useState(estadoIncial)

    const agregarElemento = () => {
        setLista([
            ...lista,
            { id: lista.length + 1, texto: 'tarea ' + (lista.length + 1) }
        ])
    }

    return (
        <>
            <button onClick={() => agregarElemento()}>Agregar</button>
            {
                lista.map((item, index) =>
                    <h4 key={item.id}>{item.texto}</h4>
                )
            }
        </>
    )
}

export default OperadorDePropagacion