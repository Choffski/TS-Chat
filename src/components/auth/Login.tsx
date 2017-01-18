import * as React from "react";
import { LoginState } from "./authInterface.d";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Jumbotron } from "react-bootstrap";

class Login extends React.Component <any, LoginState> {

  constructor() {
    super();

    this.state = {
      showSignup: false,
      forgot: false
    };
  }
  // lifecycle events

  // functions

  _showSignup = () => {
    this.setState({showSignup: !this.state.showSignup});
  }

  render() {

    return(
      <div className="Login">
          <Jumbotron className="login-jumbotron">
            {this.state.showSignup ?
              <SignupForm handleShowForm={this._showSignup.bind(this)} />
              :
              <LoginForm handleShowForm={this._showSignup.bind(this)} />
            }
          </Jumbotron>
      </div>
    );
  };

};

export default Login;
