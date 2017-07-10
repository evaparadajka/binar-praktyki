const initialState = {
  email: "guest",
  token: null,
  id: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        email: action.data.email,
        token: action.data.token,
        id: action.data.id
      };
    case "LOGOUT":
      return { email: "guest", token: null, id: null };
    default:
      return state;
  }
};

export default user;
