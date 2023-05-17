import {Button, SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from "../App";
import React from "react";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
    const columns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    };
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    if (error) return <Text>Something went wrong... Error: {error.message}</Text>

    return (
        <>
            <SimpleGrid columns={columns} spacing={4} marginBottom={4}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                )}
            </SimpleGrid>
            {hasNextPage && (
                <Button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading more...' : 'Load more'}
                </Button>
            )}
        </>
    );
};

export default GameGrid;