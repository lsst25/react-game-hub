import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
          <GridItem gridArea="main">
              <GameGrid />
          </GridItem>
      </Grid>
  )
}

export default App
