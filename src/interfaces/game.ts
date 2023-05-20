import {Platform} from "./platform";
import {Genre} from "./genre";
import {Publisher} from "./publisher";

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    publishers: Publisher[];
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
}