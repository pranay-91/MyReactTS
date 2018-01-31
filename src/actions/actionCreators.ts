import ActionTypes from "./actionTypes";

export interface IUserAction {
  type: string;
  payload?: object | string | number;
  user?: object;
}

export function changeUser(user: object): IUserAction {
  return  {
    type: ActionTypes.CHANGE_USER,
    user,
  };
}

export function fetchUser(): IUserAction {
  return {
    payload: 1,
    type: ActionTypes.FETCH_USERS,
  };
}
