import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const columns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
    };
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <>
            {error && <Text>Something went wrong... Error: {error}</Text>}
            <SimpleGrid columns={columns} spacing={3} padding="10px">
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
        </>
    );
};

export default GameGrid;