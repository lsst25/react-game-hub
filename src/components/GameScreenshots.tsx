import useScreenShots from "../hooks/useScreenShots";
import {Image, SimpleGrid} from "@chakra-ui/react";

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const {data, isLoading, error} = useScreenShots(gameId);

    if (isLoading) return null;
    if (error || !data) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} gap={2}>
            {data.results.map(({id, image}) => (
                <Image src={image} alt="" key={id} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;