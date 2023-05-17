import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24, // 1 day
        initialData: {count: platforms.length, results: platforms, next: null},
    });

    return {platforms: data, isLoading, error};
};

export default usePlatforms;