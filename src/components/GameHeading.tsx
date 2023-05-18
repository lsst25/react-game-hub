import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { genreId, platformId } = gameQuery;
    const genre = useGenre(genreId);
    const platform = usePlatform(platformId);

    const heading = `${genre?.name ?? ''} ${platform?.name ?? ''} Games`;

    return (
        <Heading as="h1" fontSize="5xl" marginBottom={5}>
            {heading}
        </Heading>
    );
};

export default GameHeading;