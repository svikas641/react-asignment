import { GET_DATA, DATA_ERROR, DELETE_USER } from "../actions/types";

const initialState = {
  users: [],
  user: null,
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        users: payload,
        user:null,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload),
        user:null,
        loading: false
      };
    case DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
