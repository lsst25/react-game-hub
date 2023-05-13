import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import {Platform} from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";

const layouts = {
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
}

const columns = {
    base: "1fr",
    lg: "200px 1fr",
}

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
      <Grid templateAreas={layouts} templateColumns={columns}>
          <GridItem gridArea="nav">
              <NavBar />
          </GridItem>
          <Show above="lg">
              <GridItem gridArea="aside" paddingX={5}>
                  <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
              </GridItem>
          </Show>
          <GridItem gridArea="main">
              <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
              <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          </GridItem>
      </Grid>
  )
}

export default App
