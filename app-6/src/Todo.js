import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            userInput: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleInput(value) {
        this.setState({userInput: value.target.value});
    }

    addTodo() {
        let list = this.state.list.map((element) => {
            return `${element}`;
        }); 

        this.setState({
            list: [...this.state.list, this.state.userInput],
            userInput: '',
        });
    }

    render() {

        return(
            <div>
                <input value={this.state.userInput} placeholder="Enter a new task" onChange={this.handleInput} />
                <button onClick={this.addTodo}>Add</button>
                <br />
                <span> ----- </span>
                <br />
                { this.state.list } 
            </div>
        )
    }
}

export default Todo;