import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : "yellow";
  return (
    <Badge
      colorScheme={color}
      variant={"outline"}
      borderRadius={3}
      paddingX="5px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
