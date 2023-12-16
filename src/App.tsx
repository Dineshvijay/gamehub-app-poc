import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";
import { GameQuery } from "./hooks/useGames";
import GameHeader from "./components/GameHeader";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genres: Genres) => {
    setGameQuery({ ...gameQuery, genres });
  };

  const handleSelectedPlatform = (platforms: Platform) => {
    setGameQuery({ ...gameQuery, platforms });
  };

  const handleSelectedOrderBy = (sortOrder: string) => {
    console.log("handleSelectedOrderBy", sortOrder);
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const handleGameSearch = (searchQuery?: string) => {
    const searchText = searchQuery ?? "";
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "240px 1fr",
        }}
        gap={2}
        padding={2}
      >
        <GridItem area="nav">
          <NavBar searchGame={handleGameSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenresList
              onSelectItem={handleSelectedGenre}
              selectedId={gameQuery.genres?.id}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box marginRight={5}>
            <GameHeader gameQuery={gameQuery} />
            <HStack style={{ paddingTop: 12 }}>
              <Box marginRight={5}>
                <SortSelector onSelectItem={handleSelectedOrderBy} />
              </Box>
              <PlatformSelector
                platform={gameQuery.platforms}
                onSelectPlatform={handleSelectedPlatform}
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
