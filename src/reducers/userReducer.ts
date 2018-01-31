import {ActionCreators, ActionTypes } from "../actions" ;

interface IState {
  users: Array<{
    id: string;
    name: string;
    age: number;
  }>;
  fetching: boolean;
  fetched: boolean;
  error: object;
}

const initialState: IState = {
  error: {},
  fetched: false,
  fetching: false,
  users: [
    {
      age: 30,
      id: "1",
      name: "Test",
    },
  ],
};

export default function reducer(state: IState= initialState, action: ActionCreators.IUserAction) {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_PENDING : {
      return { ...state, fetching: true};
    }
    case ActionTypes.FETCH_USERS_REJECTED: {
      return { ...state, fetching: false, error: action.payload };
    }

    case ActionTypes.CHANGE_USER: {
      return {
        ...state,
        users: [action.user],
      };
    }
    default:
      break;
  }
  return state;
}
