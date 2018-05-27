import ActionTypes from "./actionTypes";

export interface IAction {
  type: string;
  payload?: any;
}

export const fetchData = () => ({ type: ActionTypes.FETCH_DATA});
