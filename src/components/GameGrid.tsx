import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { games, error, isLoading } = useGames(gameQuery);
    const columns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    };
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    if (error) return <Text>Something went wrong... Error: {error}</Text>;

    return (
        <SimpleGrid columns={columns} spacing={4}>
            {isLoading && skeletons.map(skeleton => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
                ))}
            {games.map(game => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>))}
        </SimpleGrid>
    );
};

export default GameGrid;