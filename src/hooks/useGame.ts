import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import {Game} from "../interfaces/game";
import ms from "ms";

const gameClient = new ApiClient<Game>('/games');

const useGame = (slug: string) => {
    return useQuery({
        queryKey: ['games', slug],
        queryFn: () => gameClient.get(slug),
        staleTime: ms('1d'),
    });
};

export default useGame;