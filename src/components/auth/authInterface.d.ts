export interface LoginFormProps {
  handleShowForm: Function;
  handleSubmit: Function;
  handleChange: Function;
  username: String;
  password: String;

}

export interface LoginState {
  showSignup?: boolean;
  forgot?: boolean;
  inputUsername?: string;
  inputPassword?: string;
}

export interface LoginState {

}
