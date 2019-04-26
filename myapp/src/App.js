import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Homeworks } from './Homeworks.json'
import FormHomeWork from './Components/FormHomeWork'
//import Navigation from './Components/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      Homeworks
    };
    this.handleAddHomework = this.handleAddHomework.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAddHomework(HomeWork) {
    this.setState({
      Homeworks: [...this.state.Homeworks, HomeWork]
    })

  }
  handleRemove(index) {
    this.setState({
      Homeworks: this.state.Homeworks.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleRemoveConfirm(index) {
    if (window.confirm('¿Estas seguro de eliminar la tarea?')) {
      this.setState({
        Homeworks: this.state.Homeworks.filter((e, i) => {
          return i !== index
        })
      });
    }
  }


  render() {
    const tareas = this.state.Homeworks.map((Homeworks, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3> {Homeworks.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{Homeworks.priority}</span>
            </div>
            <div className="card-body">
              <p><mark>{Homeworks.description}</mark></p>
              <p>{Homeworks.responsible} </p>

            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveConfirm.bind(this, i)}> Borrar</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white" href="#">Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.Homeworks.length}
            </span>
          </a>

        </nav>



        <div className="container">
          <div className="row mt-4" >
            <div className="col-md-3">

              <img src={logo} className="App-logo" alt="logo" width="100" height="100" alt="" />
              <FormHomeWork onAddHomework={this.handleAddHomework}></FormHomeWork>
            </div>

            <div className="col-md-9">
              <div className="row">
                {tareas}
              </div>
            </div>
          </div>
        </div>



      </div>
    );

  }

}

export default App;
