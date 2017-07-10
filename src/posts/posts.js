const initialState = {
  postsCollection: [
    { title: "first", text: "text1", timestamp: 1 },
    { title: "second", text: "text2", timestamp: 2 },
    { title: "third", text: "text3", timestamp: 3 },
    { title: "forth", text: "text4", timestamp: 4 },
    { title: "fifth", text: "text5", timestamp: 5 },
    { title: "sixth", text: "text6", timestamp: 6 },
    { title: "seventh", text: "text7", timestamp: 7 }
  ],
  postToShow: { title: "no post selected", timestamp: 0 },
  count: 7
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPOST":
      return {
        ...state,
        postsCollection: [...state.postsCollection, action.post],
        count: state.count + 1
      };
    case "FETCH_POSTS":
      return {
        ...state,
        postsCollection: action.payload,
        count: action.payload.length
      };
    case "DELPOST":
      return {
        ...state,
        postsCollection: state.postsCollection.filter(
          p => p.timestamp !== action.timestamp
        ),
        count: state.count - 1
      };
    case "SHOW":
      return {
        ...state,
        postToShow: state.postsCollection.find(p => p.id === action.key)
      };
    default:
      return state;
  }
};

export default posts;
