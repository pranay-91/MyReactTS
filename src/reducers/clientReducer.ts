import {ActionCreators, ActionTypes } from "../actions" ;

interface IState {
  data: object;
  error: object;
  fetching: boolean;
}

const initialState: IState = {
  data: {},
  error: {},
  fetching: false,
};

const clientReducer = (state: IState= initialState, action: ActionCreators.IAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA : {
      return { ...state, fetching: true};
    }
    case ActionTypes.FETCH_DATA_FAILED: {
      return { ...state, fetching: false, error: action.payload };
    }
    case ActionTypes.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: {},
        fetching: false,
      };
    }
    default:
      break;
  }
  return state;
};

export default clientReducer;
