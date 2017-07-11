const initialState = {
  email: "guest",
  token: null,
  id: null,
  status: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PROGRESS":
      return {
        status: "loging in progress"
      };
    case "LOGIN_SUCCESS":
      return {
        email: action.data.email,
        token: action.data.token,
        id: action.data.id,
        status: ""
      };
    case "LOGIN_ERROR":
      return {
        status: "Incorrect email or password"
      };
    case "LOGOUT":
      return { email: "guest", token: null, id: null };
    default:
      return state;
  }
};

export default user;
