import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame";
import {GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner/>;
    if (error || !game) throw error;

    return (
        <SimpleGrid
            as="article"
            columns={{base: 1, md: 2}}
            templateColumns={{md: "2.5fr 3fr"}}
            marginY={5}
            gap={3}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game}/>
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id}/>
                <GameScreenshots gameId={game.id}/>
            </GridItem>
        </SimpleGrid>
    )
};

export default GameDetailPage;