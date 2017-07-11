import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";

import counter from "./posts/counter";
import posts from "./posts/posts";
import user from "./session/session";

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  user: user
});

//const memoryUserPosts = ["user", "posts"];
const enhancer = compose(applyMiddleware(thunk), persistState("user"));
const store = createStore(rootReducer, {}, enhancer);

//const store = createStore(rootReducer);

export default store;
