import useData from "./useData";
import {Genre} from "./useGenres";
import {AxiosRequestConfig} from "axios";
import {Platform} from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id
        }
    };
    const { data, error, isLoading } = useData<Game>('/games', requestConfig, [selectedGenre?.id, selectedPlatform?.id]);

    return { games: data, error, isLoading };
};

export default useGames;