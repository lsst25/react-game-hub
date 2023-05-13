import useData from "./useData";
import {AxiosRequestConfig} from "axios";
import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
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
    const { data, error, isLoading } = useData<Game>('/games', requestConfig, [gameQuery]);

    return { games: data, error, isLoading };
};

export default useGames;