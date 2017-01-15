import * as React from "react";
import { LoginFormProps } from "./authInterface.d";

class LoginForm extends React.Component <LoginFormProps, any> {


render() {
      return(
          <form className="form-horinzontal login-form">
            <fieldset>
              <legend> Login </legend>
              <div className="login-form-group">
                <label htmlFor="inputUsername" className="control-label">Username</label>
                <div className="login-form-group--input-wrapper">
                    <input required={true}  type="text" className="form-control" id="inputUsername" placeholder="Enter Username.." />
                </div>
              </div>
              <div className="login-form-group">
                <label htmlFor="inputPassword" className="control-label">Password</label>
                <div className="login-form-group--input-wrapper">
                    <input required={true}  type="password" className="form-control" id="inputPassword" placeholder="Enter Password.." />
                </div>
              </div>
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
