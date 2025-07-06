import axios, { type AxiosResponse } from "axios";

axios.defaults.baseURL="http://localhost:5205/api/"

const queries = {
    get: (url: string) => axios.get(url).then((response: AxiosResponse) => response.data),
    post: (url: string, body: {}) => axios.post(url, body).then((response: AxiosResponse) => response.data),
    put: (url: string, body: {}) => axios.put(url, body).then((response: AxiosResponse) => response.data),
    delete: (url: string) => axios.delete(url).then((response: AxiosResponse) => response.data),
}

const Catalog = {
    list: () => queries.get("Product"),
    details: (id: number) => queries.get(`Product/${id}`)
}

const request = {
    Catalog
}

export default request