import {createStore, combineReducers} from 'redux';


const initialState = {
  postsCollection: [{ title: 'pierwszy', timestamp: 1},
  { title: 'drugi', timestamp: 2},
  { title: 'trzeci', timestamp: 3},
  { title: 'czwarty', timestamp: 4},
  { title: 'piąty', timestamp: 5},
  { title: 'szósty', timestamp: 6},
  { title: 'siódmy', timestamp: 7},]
};


const counter = (state=0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return  state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
};
}


const posts = (state = initialState, action) => {
  switch(action.type) {
    case 'ADDPOST':
      return { ...state, postsCollection: [...state.postsCollection, action.post]};
    case 'DELPOST':
      return { ...state, postsCollection: state.postsCollection.filter(p=> p.timestamp!==action.timestamp)};
    default:
      return state;
};
}

const user = (state='guest', action) => {
  switch(action.type) {
    case 'LOGIN':
      return state=action.userMail;
    case 'LOGOUT':
      return state='guest';
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  user: user
});


// const reducer=(state=initialState ,action) => {
//   switch(action.type) {
//
//     case 'INCREMENT':
//       return { ...state, counter: state.counter+1};
//
//     case 'DECREMENT':
//       return { ...state, counter: state.counter-1};
//
//     case 'ADDPOST':
//       return { ...state, posts: [...state.posts, action.post]};
//
//       case 'DELPOST':
//         return { ...state, posts:state.posts.filter(p=> p.timestamp!==action.timestamp)};
//
//     default:
//       return state;
//   }
// }

const store=createStore(rootReducer);

export default store;
