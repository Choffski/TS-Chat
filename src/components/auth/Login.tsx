import * as React from "react";
import { LoginState } from "./authInterface.d";
import { login } from "../../actions/user";
import { connect } from "react-redux";
import { hashHistory } from "react-router";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Jumbotron } from "react-bootstrap";

class Login extends React.Component <any, LoginState> {

  constructor() {
    super();
    delete window.sessionStorage["token"];
    this.state = {
      showSignup: false,
      forgot: false,
      inputUsername: "",
      inputPassword: ""
    };
  }
  // lifecycle events

  // functions

  _showSignup = (): void => {
    this.setState({showSignup: !this.state.showSignup});
  }
  _handleLogin = (e) => {
    

    this.props.dispatch(login(this.state.inputUsername, this.state.inputPassword)).then(resp => {
      window.sessionStorage["token"] = resp.data;
      hashHistory.push("/main");
    });
  }
  _handleChange = (e): void => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

    return(
      <div className="Login">
          <Jumbotron className="login-jumbotron">
            {this.state.showSignup ?
              <SignupForm handleShowForm={this._showSignup.bind(this)}  />
              :
              <LoginForm handleShowForm={this._showSignup.bind(this)} username={this.state.inputUsername} password= {this.state.inputPassword} handleSubmit={this._handleLogin} handleChange={this._handleChange}/>
            }
          </Jumbotron>
      </div>
    );
  };

};

export default connect()(Login);
