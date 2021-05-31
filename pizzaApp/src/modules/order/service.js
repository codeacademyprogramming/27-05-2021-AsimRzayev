import { HttpClient } from "../httpClient";

class OrderService extends HttpClient {
    constructor() {
        super("https://607ebb8202a23c0017e8bf04.mockapi.io/a/1");
    }

    getOrder() {
        return this.get("attendence");
    }

 

    addOrder(data) {
        return this.post(
            'https://httpbin.org/post',
            data
        )
    }

    updateOrder(data) {
        return this.post(
            'https://httpbin.org/post',
            data
        )
    }
}

export const orderService = new OrderService();
