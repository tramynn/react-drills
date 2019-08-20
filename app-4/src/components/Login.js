import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };
        this.inputUsername = this.inputUsername.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    inputUsername(name) {
        this.setState({username: name.target.value});
    }

    inputPassword(pass) {
        this.setState({password: pass.target.value});
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return(
            <div>
                <input placeholder="username" type="text" onChange={this.inputUsername} />
                <input placeholder="password" type="password" onChange={this.inputPassword} />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login;