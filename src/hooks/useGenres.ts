import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Genre>>('/genres')
                .then(response => response.data),
        staleTime: 1000 * 60 * 60 * 24, // 1 day
        initialData: {count: genres.length, results: genres},
    });
    return { genres: data, error, isLoading};
};

export default useGenres;

