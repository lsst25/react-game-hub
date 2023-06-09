import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames();
    const columns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    };
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    if (error) return <Text>Something went wrong... Error: {error.message}</Text>

    const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

    return (
        <>
            <InfiniteScroll
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={<Spinner/>}
                dataLength={fetchedGamesCount}>
                <SimpleGrid columns={columns} spacing={4} padding={3}>
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
            </InfiniteScroll>
        </>
    );
};

export default GameGrid;