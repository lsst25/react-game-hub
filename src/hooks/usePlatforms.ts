import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then(response => response.data),
        staleTime: 1000 * 60 * 60 * 24, // 1 day
        initialData: {count: platforms.length, results: platforms},
    });

    return {platforms: data, isLoading, error};
};

export default usePlatforms;