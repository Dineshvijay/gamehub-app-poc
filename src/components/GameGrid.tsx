import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames, { GameQuery } from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";

interface Props {
  gameQuery: GameQuery | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error)
    return (
      <Text fontSize="2xl" as="b" color="tomato">
        {error}
      </Text>
    );
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={10}
      padding={2}
    >
      {isLoading &&
        skeletons.map((data) => (
          <GameContainer key={data}>
            <GameCardSkeleton />
          </GameContainer>
        ))}
      {data.map((game) => (
        <GameContainer key={game.id}>
          <GameCard game={game} />
        </GameContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
