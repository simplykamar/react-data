import { createStore, applyMiddleware } from 'redux';
import combineReducers from './rootReducers';
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware =createSagaMiddleware();

const store = createStore(combineReducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(productSaga)
export default store;