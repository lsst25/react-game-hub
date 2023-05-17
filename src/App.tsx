import {Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sort: string;
    search: string;
}

const layouts = {
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
}

const columns = {
    base: "1fr",
    lg: "200px 1fr",
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid templateAreas={layouts} templateColumns={columns}>
            <GridItem gridArea="nav">
                <NavBar onSearch={(search) => setGameQuery({...gameQuery, search})}/>
            </GridItem>
            <Show above="lg">
                <GridItem gridArea="aside" paddingX={5}>
                    <GenreList selectedGenreId={gameQuery.genreId}
                               onSelectGenre={(genreId) => setGameQuery({...gameQuery, genreId})}/>
                </GridItem>
            </Show>
            <GridItem gridArea="main" padding={3}>
                <GameHeading gameQuery={gameQuery}/>
                <Flex gap={2} marginBottom={3}>
                    <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                      onSelectPlatform={(platformId) => setGameQuery({...gameQuery, platformId})}/>
                    <SortSelector selectedSort={gameQuery.sort}
                                  onSelectSort={(sort) => setGameQuery({...gameQuery, sort})}/>
                </Flex>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App
