import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {ActionSaga} from "./actions";

import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(reducer, middleware);

sagaMiddleware.run(ActionSaga);
console.log(store);
export default store;
