import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  TOGGLE_TODO,
} from "./types";
import axios from "axios";

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text: item,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const fetchUsers = () => {
  return async function (dispatch) {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const result = await axios("https://dummyjson.com/users");
      console.log(result.data.users);
      dispatch({ type: FETCH_USERS_SUCCESS, payload: result.data.users });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};
