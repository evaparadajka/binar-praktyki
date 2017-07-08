import { createStore, combineReducers, compose } from "redux";
import persistState from "redux-localstorage";

import counter from "./posts/counter";
import posts from "./posts/posts";
import user from "./session/session";

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  user: user
});

const memoryUserPosts = ["user", "posts"];
const enhancer = compose(persistState(memoryUserPosts));
const store = createStore(rootReducer, {}, enhancer);

//const store = createStore(rootReducer);

export default store;
