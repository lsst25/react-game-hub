import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} alt={game.name} />
            <CardBody>
                <Heading fontSize="2xl">
                    {game.name}
                </Heading>
                <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
            </CardBody>
        </Card>
    );
};

export default GameCard;