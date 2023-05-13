import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
const layouts = {
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
}


function App() {

  return (
      <Grid templateAreas={layouts}>
          <GridItem gridArea="nav">
              <NavBar />
          </GridItem>
          <Show above="lg">
              <GridItem gridArea="aside">
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
