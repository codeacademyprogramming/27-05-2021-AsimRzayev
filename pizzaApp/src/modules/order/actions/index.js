import { orderService } from "../service";
import { ORDER_ACTIONS } from "./consts";

export function getOrder(dispatch) {
    dispatch({ type: ORDER_ACTIONS.GET_ORDER });
    orderService.getOrder().then((data) => {
        dispatch({
            type: `${ORDER_ACTIONS.GET_ORDER}_SUCCESS`,
            payload: data,
        })
    }).catch((err) => {
        dispatch({
            type: `${ORDER_ACTIONS.GET_ORDER}_ERROR`,
            error: err,
        })
    })
}

export function addOrder(dispatch) {
    return function (data) {

        dispatch({ type: ORDER_ACTIONS.ADD_ORDER })

        orderService.addOrder(data)
            .then(resp => {

                dispatch({
                    type: `${ORDER_ACTIONS.ADD_ORDER}_SUCCESS`,
                    payload: data,
                })
            })
            .catch(err => dispatch({
                type: `${ORDER_ACTIONS.ADD_ORDER}_ERROR`,
                error: err,
            }))
    }
}

export function updateOrder(dispatch) {
    return function (data) {

        dispatch({ type: ORDER_ACTIONS.UPDATE_ORDER })

        orderService.addOrder(data)
            .then(resp => {

                dispatch({
                    type: `${ORDER_ACTIONS.UPDATE_ORDER}_SUCCESS`,
                    payload: data,
                })
            })
            .catch(err => dispatch({
                type: `${ORDER_ACTIONS.UPDATE_ORDER}_ERROR`,
                error: err,
            }))
    }
}