import * as React from "react";

class SignupForm extends React.Component <any, any> {
  render() {
    return(
      <form className="form-horinzontal login-form">
        <fieldset>
          <legend> Sign Up </legend>
          <div className="login-form-group">
            <label htmlFor="inputEmail" className="control-label">Email</label>
            <div className="login-form-group--input-wrapper">
                <input required={true}  type="text" className="form-control" id="inputEmail" placeholder="Enter Email.." />
            </div>
          </div>
          <div className="login-form-group">
            <label htmlFor="inputUsername" className="control-label">Username</label>
            <div className="login-form-group--input-wrapper">
                <input required={true}  type="text" className="form-control" id="inputUsername" placeholder="Select Username, this can be changed later.." />
            </div>
          </div>
          <div className="login-form-group">
            <label htmlFor="inputPassword" className="control-label">Password</label>
            <div className="login-form-group--input-wrapper">
                <input required={true}  type="password" className="form-control" id="inputPassword" placeholder="Select Password.." />
            </div>
          </div>
          <div className="login-form-group">
            <label htmlFor="reinputPassword" className="control-label">Re-enter Password</label>
            <div className="login-form-group--input-wrapper">
                <input required={true} type="password" className="form-control" id="reinputPassword" placeholder="Re-enter Password.." />
            </div>
          </div>
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
