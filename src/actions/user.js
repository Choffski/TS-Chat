"use strict";
var types = require("./types");
var axios_1 = require("axios");
var API_END_POINT = "http://localhost:3000";
exports.login = function (user, password) { return function (dispatch) {
    dispatch({ type: types.LOGIN_PENDING });
    return axios_1.default.post(API_END_POINT + "/users/login", { user: user, password: password })
        .then(function (resp) {
        dispatch({ type: types.LOGIN_FULFILLED, payload: resp.data });
        return resp;
    })
        .catch(function (err) {
        dispatch({ type: types.LOGIN_REJECTED, payload: err });
        return err;       

    });
}; };
