import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
                  Aside
              </GridItem>
          </Show>
          <GridItem gridArea="main">
              Main
          </GridItem>
      </Grid>
  )
}

export default App
