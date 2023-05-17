import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { genres } = useGenres();
    const { platforms } = usePlatforms();

    const { genreId, platformId } = gameQuery;
    const genreName = genres?.results.find((genre) => genre.id === genreId)?.name;
    const platformName = platforms?.results.find((platform) => platform.id === platformId)?.name;

    const heading = `${genreName ?? ''} ${platformName ?? ''} Games`;

    return (
        <Heading as="h1" fontSize="5xl" marginBottom={5}>
            {heading}
        </Heading>
    );
};

export default GameHeading;