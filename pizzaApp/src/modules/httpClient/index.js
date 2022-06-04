import axios from "axios";

export class HttpClient {
    async get(url) {
        const res = await axios.get(`${url}`);

        return res.data;
    }

    async post(url, body) {
        return await axios.post(`${url}`, body);
    }
}
