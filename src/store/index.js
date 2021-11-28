import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { SET_BLOG, SET_BLOGS } from "./actionType";

const initialState = {
  blogs: [],
  blog: {},
};

function reducer(state = initialState, action) {
  if (action.type === SET_BLOG) {
    return { ...state, blog: state.blog };
  } else if (action.type === SET_BLOGS) {
    return { ...state, blogs: state.blogs };
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
