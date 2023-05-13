import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import {Platform} from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null;
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
              <NavBar />
          </GridItem>
          <Show above="lg">
              <GridItem gridArea="aside" paddingX={5}>
                  <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
              </GridItem>
          </Show>
          <GridItem gridArea="main">
              <HStack spacing={5} padding={2}>
                  <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
                  <SortSelector />
              </HStack>
              <Box padding={2}>
                <GameGrid gameQuery={gameQuery} />
              </Box>
          </GridItem>
      </Grid>
  )
}

export default App
