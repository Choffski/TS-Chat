import * as React from "react";
import FormGroup from "./FormGroup";


class SignupForm extends React.Component <any, any> {
  render() {
    return(
      <form className="form-horinzontal login-form">
        <fieldset>
          <legend> Sign Up </legend>

          <FormGroup name="inputEmail" required="true" label="Email" placeholder="Enter Email.." type="text">
          </FormGroup>
          <FormGroup name="inputUsername" required="true" label="Username" placeholder="Select Username (can be changed)" type="text">
          </FormGroup>
          <FormGroup name="inputPassword" required="true" label="Password" placeholder="Enter Password.." type="password">
          </FormGroup>
          <FormGroup name="reinputPassword" required="true" label="Re-enter password" placeholder="Re-enter Password.." type="password">
          </FormGroup>
       </fieldset>
        <div className="login-form-buttonbar">
          <button href="#" onClick={() => this.props.handleShowForm()} className="btn btn-dgrey"> Back </button>
          <button type="submit" className=" btn btn-yellow">Sign up</button>
        </div>
      </form>
    );
  };

};

// () => this.props.handleShowForm()

export default SignupForm;
