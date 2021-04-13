import React, { Component } from "react";
import axios from 'axios'
import './App.css'

//Components
import NavBar from './components/NavBar'
import OperadorDePropagacion from "./components/OperadorDePropagacion";
import Formulario from "./components/Formulario";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      contador: 0,
      titulo: 'Titulo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      stilosboton: [
        'btn btn-primary',
        'btn btn-success',
        'btn btn-info',
        'btn btn-warning',
        'btn btn-danger',
        'btn btn-dark',
        'btn btn-light',
        'btn btn-link',
        'btn',
      ]
    }

    // this.changeHandler = this.changeHandler.bind(this);

  }

  componentDidMount = () => {

    // this.desc = "logger"
    console.log(this.state);
  }

  incrementar = () => {
    console.log("se incrementa", this.state.index, this.state.stilosboton[this.state.index])

    var { index, contador } = this.state;

    const img = 'https://picsum.photos/500/500?random=' + index;

    if (index == this.state.stilosboton.length - 1) {
      index = 0;
      contador += 1;
    } else {
      index += 1;
      contador += 1;
    }

    this.setState({
      contador: contador,
      index: index,
      img: img
    });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <>

        {/* <NavBar/> */}

        <div className="App-header">
          <div className="container">
            <div className="row">

            <div className="col-sm-4">
                <Formulario/>
              </div>

              <div className="col-sm-4" style={{ textAlign: 'center' }}>
                <img src={this.state.img} className="img-fluid" />
                <button style={{ fontSize: '20px', marginTop: '25px' }} className={this.state.stilosboton[this.state.index]} onClick={this.incrementar}>Clickea aqui!</button>
              </div>

              <div className="col-sm-4">
                {/* <h1>{this.state.titulo}</h1> */}
                <h2 style={{ marginTop: '20px' }}>Clicks: {this.state.contador}</h2>
                <OperadorDePropagacion/>
              </div>


            </div>
          </div>
        </div>

      </>
    );

  }

}

export default App;
