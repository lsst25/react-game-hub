import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    const {data, error, isLoading} = useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres,
    });
    return {genres: data, error, isLoading};
};

export default useGenres;

