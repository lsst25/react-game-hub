import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";

const GameCard = ({ game }: { game: Game }) => {
    const platforms = game.parent_platforms.map(({ platform }) => platform);

    return (
        <Card>
            <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
            <CardBody>
                <Heading fontSize="2xl">
                    {game.name}
                </Heading>
                <HStack marginY={1} justifyContent="space-between">
                    <PlatformIconList platforms={platforms} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;