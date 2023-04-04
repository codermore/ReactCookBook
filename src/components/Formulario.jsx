import React from 'react'

const Formulario = (props) => {
    const [titulo, setTitulo] = React.useState('')
    const [error, setError] = React.useState(null)
    const [verifyTitle, setVerifyTitle] = React.useState('Titulo')

    console.log(props.stilosBotonIndex)

    const guardarDatos = (e) => {
        e.preventDefault()

        if (!titulo.trim()) {
            setError('Debe ingresar algo valido')
            return
        } /* La funcion trim valida */

        console.log("Se envian los datos..")
        setError(null)
        setTitulo('') // esto seria equivalente a escribir titulo = '';
        setVerifyTitle(titulo);
        e.target.reset()
    }

    return (
        <form onSubmit={guardarDatos}>
            <h1>{verifyTitle}</h1>
            <hr color="white" />
            <h4>Modificar... </h4>
            {
                error && (
                    <div style={{fontSize: '20px'}}className="alert alert-danger">
                        {error}
                    </div>
                )
            }
            <input
                type="text"
                placeholder="titulo"
                className="form-control mb-2"
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button
                type="submit"
                className={props.stilosBotonIndex}
            >
                Guardar
            </button>

        </form>
    )
}

export default Formulario