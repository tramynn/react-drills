import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };
        this.inputUsername = this.inputUsername.bind(this);
    }

    inputUsername(e) {
        this.setState({username: e.target.value});
    }

    inputPassword(e) {
    this.setState({password: e.target.value});
    }

    handleClick() {
    
    }

    render() {
        return(
            <div>
                <input placeholder="username" type="text" onChange={props.inputUsername} />
                <input placeholder="password" type="password" onChange={props.inputPassword} />
                <button onChange={props.handleClick}>Login</button>
            </div>
        );
    }
}

export default Login;