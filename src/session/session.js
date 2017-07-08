// const initialState = {
//   email: "guest",
//   token: null
// };

const user = (state = "guest", action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.userMail);
    case "LOGOUT":
      return (state = "guest");
    default:
      return state;
  }
};

export default user;
