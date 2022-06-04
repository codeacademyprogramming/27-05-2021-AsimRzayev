import { ASYNC_STATUS } from "../../../redux/consts";
import { PIZZA_ACTIONS } from "../actions/consts";

const initialState = {
    data: [],
    error: null,
    status: ASYNC_STATUS.IDLE,
};

export function pizzaReducer(state = initialState, action) {
    switch (action.type) {
        case PIZZA_ACTIONS.GET_PIZZAS:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null,
            };
        case `${PIZZA_ACTIONS.GET_PIZZAS}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null,
            };
        case `${PIZZA_ACTIONS.GET_PIZZAS}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error,
            };
        default:
            break;
    }
    return state;
}
