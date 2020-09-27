import { Action } from "./types/Action";
import { State } from "./types/State";

export const initialState = {
  user: null,
}

export const actionTypes = {
  SET_USER: 'SET_USER',
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state;
  }
}

export default reducer;
