import ApiClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import {ScreenShot} from "../interfaces/screen-shot";

const useScreenShots = (gameId: string | number) => {
    const apiClient = new ApiClient<ScreenShot>(`games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll,
        staleTime: ms('1d'),
    });
};

export default useScreenShots;