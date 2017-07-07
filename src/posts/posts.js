const initialState = {
  postsCollection: [{ title: 'first', timestamp: 1},
  { title: 'second', timestamp: 2},
  { title: 'third', timestamp: 3},
  { title: 'forth', timestamp: 4},
  { title: 'fifth', timestamp: 5},
  { title: 'sixth', timestamp: 6},
  { title: 'seventh', timestamp: 7},],
  postToShow: {title: 'no post selected', timestamp: 0},
};

const posts = (state = initialState, action) => {
  switch(action.type) {
    case 'ADDPOST':
      return { ...state, postsCollection: [...state.postsCollection, action.post]};
    case 'DELPOST':
      return { ...state, postsCollection: state.postsCollection.filter(p => p.timestamp!==action.timestamp)};
    case 'SHOW':
      return {...state, postToShow: state.postsCollection.find(p => p.timestamp===action.timestamp)};
    default:
      return state;
  };
}

export default posts
