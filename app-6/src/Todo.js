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
        this.setState({
            list: [...this.state.list, this.state.userInput],
            userInput: '',
        });
    }
    
    render() {
        let list = this.state.list.map((element, i) => {
            return <li key={i}>{element}</li>;
        }); 

        return(
            <div>
                <input value={this.state.userInput} placeholder="Enter a new task" onChange={this.handleInput} />
                <button onClick={this.addTodo}>Add</button>
                <br />
                <span> ----- </span>
                <br />
                <ul className="list-style">
                    {list}
                </ul>
            </div>
        )
    }
}

export default Todo;