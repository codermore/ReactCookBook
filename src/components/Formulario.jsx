import React from 'react'

export default function Formulario() {

    const [titulo, setTitulo] = React.useState('Titulo')

    return (
        <form className="form">
            <h1>{titulo}</h1>
            <hr color="white"/>
            <h4>Modificar... </h4>
            <input
                type="text"
                placeholder="titulo"
                className="form-control mb-2"
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button 
            type="submit" 
            /*className={this.state.stilosboton[this.state.index]}*/
            className="btn btn-success"
            
            >
            Guardar </button>

        </form>
    )
}
