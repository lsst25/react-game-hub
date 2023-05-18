import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

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
        staleTime: ms('24h'),
        initialData: platforms,
    });

    return {platforms: data, isLoading, error};
};

export default usePlatforms;