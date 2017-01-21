import * as React from "react";
import { LoginFormProps } from "./authInterface.d";
import FormGroup from "./FormGroup";

class LoginForm extends React.Component <LoginFormProps, any> {


render() {
      return(
          <form onSubmit={this.props.handleSubmit.bind(this,event)} className="form-horinzontal login-form">
            <fieldset>
              <legend> Login </legend>
              <FormGroup
              required="true"
              type="text"
              name="inputUsername"
              placeholder="Enter Username.."
              label="Username"
              value={this.props.username}
              handleChange={this.props.handleChange.bind(this)}>
              </FormGroup>

              <FormGroup
              required="true"
              type="password"
              name="inputPassword"
              placeholder="Enter Password.."
              label="Password"
              value={this.props.password}
              handleChange={this.props.handleChange}>
              </FormGroup>
           </fieldset>
           <div className="login-form-buttonbar">
           <button type="submit" className="btn btn-yellow">Login</button>
           </div>
           <div className="login-form-buttonbar">
           <span> Forgot your password? </span>
           </div>
           <div className="login-form-buttonbar">
            <span onClick={() => this.props.handleShowForm()}> Not a member yet?</span>
           </div>
          </form>
        );
  };

};

export default LoginForm;
