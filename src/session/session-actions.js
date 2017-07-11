import apiClient from "../lib/api-client";
import { hashHistory } from "react-router";

export const signIn = user => {
  return dispatch => {
    dispatch({ type: "LOGIN_PROGRESS", data: {} });
    apiClient
      .post("/api/v1/sessions", {
        user: { email: user.email, password: user.password }
      })
      .then(response => {
        dispatch({
          type: "LOGIN_SUCCESS",
          data: {
            email: response.data.data.email,
            token: response.data.data.auth_token,
            id: response.data.data.user_id
          }
        });
        hashHistory.push("posts");
      })
      .catch(error => {
        console.log(error);
        alert("Incorrect email or password");
      });
  };
};
