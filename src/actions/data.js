import axios from "axios";
import { GET_DATA, DATA_ERROR, DELETE_USER } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=2");

    dispatch({
      type: GET_DATA,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};

export const deleteUsers = id => async (dispatch) => {
  try {

    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};
