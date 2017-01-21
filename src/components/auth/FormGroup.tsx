import  * as React from "react";

const FormGroup = (props) => {
return(
  <div className="login-form-group">
    <label htmlFor={props.name} className="control-label">{props.label}</label>
    <div className="login-form-group--input-wrapper">
        <input required={props.required}  type={props.type} value={props.value} className="form-control" id= {props.name} name={props.name} placeholder={props.placeholder} onChange={props.handleChange} />
    </div>
  </div>
);
};

export default FormGroup;
