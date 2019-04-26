import React, { Component } from 'react';

class FormHomeWork extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'baja'

        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleInputReset = this.handleInputReset.bind(this);
    }
    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        // console.log(this.state);
    }
    /*handleInputReset(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: null
        })
        
    }*/
    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
        this.props.onAddHomework(this.state);
        
    }

   

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" onChange={this.handleInput} placeholder="Nombre de la tarea" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" onChange={this.handleInput} placeholder="Responsable" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" onChange={this.handleInput} placeholder="Descripcion" />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option>baja</option>
                            <option>media</option>
                            <option>alta</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

        );
    }

}
export default FormHomeWork;