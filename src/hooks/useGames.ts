import {AxiosRequestConfig} from "axios";
import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.search,
        }
    };
    const { data, error, isLoading } = useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Game>>('/games', requestConfig)
                .then(response => response.data),
        staleTime: 1000 * 60, // One minute
    });

    return { games: data, error, isLoading };
};

export default useGames;