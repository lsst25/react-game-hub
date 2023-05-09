import {Grid, GridItem, Show} from "@chakra-ui/react";
const layouts = {
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,

}


function App() {

  return (
      <Grid templateAreas={layouts}>
          <GridItem gridArea="nav" bg="coral">
              Nav
          </GridItem>
          <Show above="lg">
              <GridItem gridArea="aside" bg="gold">
                  Aside
              </GridItem>
          </Show>
          <GridItem gridArea="main" bg="dodgerblue">
              Main
          </GridItem>
      </Grid>
  )
}

export default App
