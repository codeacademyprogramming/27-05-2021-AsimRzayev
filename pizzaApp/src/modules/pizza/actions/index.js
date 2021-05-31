import { pizzaService } from "../service";
import { PIZZA_ACTIONS } from "./consts";

export function getPizzas(dispatch) {
    dispatch({ type: PIZZA_ACTIONS.GET_PIZZAS });
    pizzaService
        .getPizzas()
        .then((data) => {
            dispatch({
                type: `${PIZZA_ACTIONS.GET_PIZZAS}_SUCCESS`,
                payload: data,
            });
        })
        .catch((err) => {
            dispatch({
                type: `${PIZZA_ACTIONS.GET_PIZZAS}_ERROR`,
                error: err,
            });
        });
}
