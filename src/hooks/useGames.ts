import useData from "./useData";
import {Genre} from "./useGenres";
import {AxiosRequestConfig} from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            genres: selectedGenre?.id
        }
    };
    const { data, error, isLoading } = useData<Game>('/games', requestConfig, [selectedGenre?.id]);

    return { games: data, error, isLoading };
};

export default useGames;