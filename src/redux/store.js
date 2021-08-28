import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);
export default store;