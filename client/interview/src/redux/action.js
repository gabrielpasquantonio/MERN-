import axios from "axios";

import {
  CREATE_USER,
  LOGIN_USER
  } from "./actionsNames";

  export function createUser(user) {
    return (dispatch) => {
      console.log(user)
          dispatch({ type: CREATE_USER, payload: {user} });
        
      
    }};
    export function login(user) {
      return (dispatch) => {
        console.log(user)
            dispatch({ type: LOGIN_USER, payload: {user} });
          
        
      };
  }