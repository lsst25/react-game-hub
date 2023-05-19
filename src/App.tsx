import {Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const layouts = {
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
}

const columns = {
    base: "1fr",
    lg: "200px 1fr",
}

function App() {
    return (
        <Grid templateAreas={layouts} templateColumns={columns}>
            <GridItem gridArea="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem gridArea="aside" paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem gridArea="main" padding={3}>
                <GameHeading />
                <Flex gap={2} marginBottom={3}>
                    <PlatformSelector />
                    <SortSelector />
                </Flex>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App
