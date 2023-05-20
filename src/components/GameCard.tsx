import {Game} from "../interfaces/game";
import {Box, Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import Emoji from "./Emoji";
import {Link} from "react-router-dom";

const GameCard = ({game}: { game: Game }) => {
    const platforms = game.parent_platforms.map(({platform}) => platform);

    return (
        <Card height="100%">
            <Image src={getCroppedImgUrl(game.background_image)} alt={game.name}/>
            <CardBody padding={4}>
                <HStack marginY={1} justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={platforms}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize="2xl">
                    <HStack justifyContent="space-between" alignItems="top">
                        <Box>
                            <Link to={`/games/${game.slug}`}>
                                {game.name}
                            </Link>
                        </Box>
                        <Emoji rating={game.rating_top}/>
                    </HStack>
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;