import { ASYNC_STATUS } from "../../../redux/consts";
import { ORDER_ACTIONS } from "../actions/consts";

const initialState = {
    data: [],
    error: null,
    status: ASYNC_STATUS.IDLE,
};

export function attendanceReducer(state = initialState, action) {
    switch (action.type) {
        case ORDER_ACTIONS.GET_ORDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null,
            };
        case `${ORDER_ACTIONS.GET_ORDER}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null,
            };
        case `${ORDER_ACTIONS.GET_ORDER}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error,
            };
        case `${ORDER_ACTIONS.ADD_ORDER}`:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                error: null,
            };
        case `${ORDER_ACTIONS.ADD_ORDER}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: [...state.data, action.payload],
                error: null,
            };
        case `${ORDER_ACTIONS.ADD_ORDER}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                error: action.error,
            };
        case `${ORDER_ACTIONS.UPDATE_ORDER}`:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                error: null,
            };
        case `${ORDER_ACTIONS.UPDATE_ORDER}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: state.data.map((order) => {
                    if (order.id === action.payload.id) {
                        console.log("salam");
                        return {
                            ...action.payload,
                        };
                    }
                    return order;
                }),
                error: null,
            };
        case `${ORDER_ACTIONS.UPDATE_ORDER}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                error: action.error,
            };
        default:
            break;
    }
    return state;
}
