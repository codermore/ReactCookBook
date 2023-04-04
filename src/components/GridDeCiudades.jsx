import React, { useState } from 'react';

const GridDeCiudades = (props) => {
    const estadoIncial = [
        { id: 1, nombre: 'Buenos Aires' },
        { id: 2, nombre: 'Cordoba' },
        { id: 3, nombre: 'Misiones' }
    ]

    const [lista, setLista] = useState(estadoIncial)
    const [modoEdicion, setModoEdicion] = useState(false)
    const [nombre, setNombre] = React.useState('')
    const [error, setError] = useState(null)
    const [id, setId] = React.useState('')


    const eliminarCiudad = id => {

        const arrayFiltrado = lista.filter(item => item.id !== id)
        setLista(arrayFiltrado)
        console.log(lista)
    }

    const editar = item => {

        console.log(lista)
        console.log("se va a editar la tarea", item)
        setModoEdicion(true)
        setId(item.id)
    }

    const guardarDatos = (e) => {
        e.preventDefault()

        if (!nombre.trim()) {
            setError('Debe ingresar algo valido')
            return
        } /* La funcion trim valida */

        const arrayEditado = lista.map(item => item.id === id ? {id, nombre} : item)

        setError(null)
        setNombre('') // esto seria equivalente a escribir titulo = '';
        setLista(arrayEditado)
        setModoEdicion(false)
        e.target.reset()
    }

    return (
        <>
            <div className="col-8">
                <h4 className="text-center">Lista de Ciudades</h4>
                {
                    lista.map(item => (
                        <li className="list-inline" key={item.id}>

                            <span> {item.id} {item.nombre} </span>

                            <button
                                className="btn btn-sm btn-danger float-right mx-2"
                                onClick={() => eliminarCiudad(item.id)}>
                                Eliminar</button>

                            <button
                                className="btn btn-sm btn-warning float-right"
                                onClick={() => editar(item)}
                            >Editar</button>
                        </li>
                    ))
                }
            </div>
            <div className="col-4">
                <h4 className="text-center">
                    {
                        modoEdicion ? 'Editar Ciudad' : null
                    }
                </h4>
                {
                    modoEdicion ? (
                        <form onSubmit={guardarDatos}>
                            <input
                                type="text"
                                placeholder="Ingrese ciudad"
                                className = "col-sm-6"
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <button 
                                type="submit"
                                className="btn btn-dark"
                            >
                                Guardar    
                            </button>
                        </form>
                    ) : null
                }
            </div>
        </>
    )
}

export default GridDeCiudades