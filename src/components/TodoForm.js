import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = (e) => {
        const { name, value }  = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addThing(this.state.todoText);
        this.setState({
            todoText: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>A To-Do! ↙↙↙ 
                <br></br>
                <br></br>
                <input
                 name='todoText'
                 id='todo-input'
                 value={this.state.todoText}
                 onChange={this.handleChanges}
                 />
                 </label> 
                 <br></br>
                 <br></br>
                 <button>Here! ⬆</button>
            </form>
        )
    }
}
