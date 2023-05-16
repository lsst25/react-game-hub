import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {AxiosRequestConfig, CanceledError} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(url: string, requestConfig?: AxiosRequestConfig, deps?: any) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        apiClient.get<FetchResponse<T>>(url, { signal, ...requestConfig })
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
};

export default useData;

