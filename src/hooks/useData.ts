import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        apiClient.get<FetchResponse<T>>(url, { signal })
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
    }, []);

    return { data, error, isLoading };
};

export default useData;
