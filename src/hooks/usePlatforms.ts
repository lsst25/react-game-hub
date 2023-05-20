import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import {Platform} from "../interfaces/platform";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

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