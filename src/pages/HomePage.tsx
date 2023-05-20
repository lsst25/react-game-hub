import {Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const layouts = {
    base: `"main"`,
    lg: `"aside main"`,
}

const columns = {
    base: "1fr",
    lg: "200px 1fr",
}

const HomePage = () => {
    return (
        <Grid templateAreas={layouts} templateColumns={columns}>
            <Show above="lg">
                <GridItem gridArea="aside">
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem gridArea="main">
                <GameHeading/>
                <Flex gap={2} marginBottom={3} paddingLeft={3}>
                    <PlatformSelector/>
                    <SortSelector/>
                </Flex>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}

export default HomePage;