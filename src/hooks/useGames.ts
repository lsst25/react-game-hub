import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";
import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client";

const apiClient = new ApiClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sort,
                search: gameQuery.search,
                page: pageParam,
            }
        }),
        staleTime: 1000 * 60 * 60, // 1 hour
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
};

export default useGames;