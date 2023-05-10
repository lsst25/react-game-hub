import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGames();
    const columns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
    };

    return (
        <>
            {error && <Text>Something went wrong... Error: {error}</Text>}
            <SimpleGrid columns={columns} spacing={10} padding="10px">
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;