import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}
const GameHeader = ({ gameQuery }: Props) => {
  return (
    <Heading size={`lg`} mb={5} mt={5}>{`${
      gameQuery.genres?.name || "Top"
    } Games ${gameQuery.platforms?.name || ""}`}</Heading>
  );
};

export default GameHeader;
