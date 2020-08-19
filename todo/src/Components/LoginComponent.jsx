import React, { Component } from "react";
import AuthService from '../Services/AuthService.js';

class LoginComponent extends Component {
  state = {
    username: "",
    password: "",
  };

  updateInputHandler = event => {
      this.setState({[event.target.name]: event.target.value}); // the [event.target.name] attr is a var, so must be in []
  }

  loginHandler = () => {
    AuthService.login(this.state.username, this.state.password)
    if(AuthService.isLoggedIn)
      this.props.history.push("/welcome");
  }

  render() {
    return (
      <>
        Username <input
                    name="username"
                    type="text"
                    onChange={this.updateInputHandler}
                    value={this.state.username} />

        <br></br>
        
        Password <input
                    name="password"
                    type="password"
                    onChange={this.updateInputHandler}
                    value={this.state.password} />

        <br></br>

        <button onClick={this.loginHandler}>Log In</button>
      </>
    );
  }
}

export default LoginComponent;
