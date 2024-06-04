import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import the thunk function directly

import WorkerReducer from './WorkerReducer';
import RoleReducer from './RoleReducer';

// Combine reducers
const reducers = combineReducers({
    workers: WorkerReducer,
    roles:RoleReducer
});

// Apply middleware including Redux Thunk
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
