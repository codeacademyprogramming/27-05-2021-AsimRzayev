import { HttpClient } from "../httpClient";

class PizzaService extends HttpClient {
    getPizzas() {
        return this.get("https://isko88.github.io/coffee.json");
    }
}

export const pizzaService = new PizzaService();
