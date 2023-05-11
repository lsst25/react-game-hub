import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";

const GameCard = ({ game }: { game: Game }) => {
    return (
        <Card width="300px" borderRadius={10} overflow="hidden">
            <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
            <CardBody>
                <Heading fontSize="2xl">
                    {game.name}
                </Heading>
                <HStack marginY={1} justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;