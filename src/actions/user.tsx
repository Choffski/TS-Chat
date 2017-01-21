import * as types from "./types";
import axios from "axios";
const API_END_POINT = "http://localhost:3000";

export const login = (user: string, password: string) => dispatch => {
dispatch({type: types.LOGIN_PENDING});
return axios.post(`${API_END_POINT}/users/login`, {user, password})
.then(resp => {
dispatch({type: types.LOGIN_FULFILLED, payload:resp.data});
return resp;
})
.catch(err => {
  dispatch({type: types.LOGIN_REJECTED, payload:err});
  return err;
});
};
