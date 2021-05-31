import { applyMiddleware, combineReducers, createStore } from 'redux';
import { attendanceReducer } from '../modules/order/reducer';
import { pizzaReducer } from '../modules/pizza/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    orders: attendanceReducer
});

const middlewares = [
    thunk,
];

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
));