const initialState = {
  email: "guest",
  token: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { email: action.userMail, token: true };
    case "LOGOUT":
      return { email: "guest", token: false };
    default:
      return state;
  }
};

export default user;
