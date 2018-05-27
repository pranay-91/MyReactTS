import {effects} from "redux-saga";
import * as apiClient from "../api/client";
import ActionTypes from "./actionTypes";

function* fetchData() {
  try {
    const payload = yield apiClient.getPlaceHolder();
    yield effects.put({ type: ActionTypes.FETCH_DATA_SUCCESS, payload });
  } catch (error) {
    yield effects.put({ type: ActionTypes.FETCH_DATA_FAILED, error });
  }
}

function* ActionSaga() {
  yield effects.takeEvery(ActionTypes.FETCH_DATA, fetchData);
}

export default ActionSaga;
