import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import {Trailer} from "../interfaces/trailer";
import ms from "ms";


const useTrailers = (gameId: number) => {
    const trailersClient = new ApiClient<Trailer>(`games/${gameId}/movies`);

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: trailersClient.getAll,
        staleTime: ms('1d'),
    });
}

export default useTrailers;