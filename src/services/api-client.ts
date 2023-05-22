import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY
    }
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = (id: string | number) => {
        return  axiosInstance
            .get<T>(`${this.endpoint}/${id}`)
            .then(response => response.data);
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }
}

export default ApiClient;