import React, { Component } from "react";
import axios from 'axios'
import './App.css'


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

    this.desc = "logger";
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

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="App-header">
          <div className="container">
            <div className="row">

              <div className="col-sm-4">
                <h1>{this.state.titulo}</h1>
                <h2 style={{ marginTop: '20px' }}>Clicks: {this.state.contador}</h2>
              </div>

              <div className="col-sm-4" style={{ textAlign: 'center' }}>
                <img src={this.state.img} className="img-fluid" />
                <button style={{ fontSize: '20px', marginTop: '25px' }} className={this.state.stilosboton[this.state.index]} onClick={this.incrementar}>Clickea aqui!</button>
              </div>

              <div className="col-sm-4">
                <form className="form">
                  <div><h2>Cambiar de nombre al titulo</h2></div>
                  <input
                    type='string'
                    name='titulo'
                    value={this.state.titulo}
                    onChange={this.changeHandler}
                    width='100px'

                  />
                  <input type="submit" value="Reinciar" className={this.state.stilosboton[this.state.index]} />

                </form>
              </div>

            </div>
          </div>
        </div>

      </>
    );

  }

}

export default App;
