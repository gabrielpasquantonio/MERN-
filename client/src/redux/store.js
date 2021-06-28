import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
 
  CREATE_USER,
  LOGIN_USER
} from "./actionsNames";

const initialState = {
  profile: {
    username: '',
    email: '',
    password:""
  },
  
};
console.log(initialState)
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      console.log('login', action.payload.user)
      return { ...state, profile: action.payload.user };
    }

    case CREATE_USER: {
      return { ...state, profile: action.payload.user };
    }
 
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
