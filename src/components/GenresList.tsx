import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";
import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

interface Props {
  selectedId?: number;
  onSelectItem: (genre: Genres) => void;
}
const GenresList = ({ onSelectItem, selectedId }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  return (
    <VStack alignItems={"flex-start"} paddingLeft={5} paddingTop={5}>
      <Heading fontSize={"2xl"} paddingBottom={5}>
        Genres
      </Heading>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {data.map((data, index) => {
          return (
            <>
              {showMore && (
                <ListItem key={data.id} paddingY={`5px`}>
                  <HStack>
                    <Image
                      borderRadius={8}
                      src={data.image_background}
                      objectFit="fill"
                      boxSize="32px"
                    />
                    <Button
                      fontSize={selectedId === data.id ? "xl" : "md"}
                      variant="link"
                      onClick={() => {
                        onSelectItem(data);
                      }}
                    >
                      {data.name}
                    </Button>
                  </HStack>
                </ListItem>
              )}
              {!showMore && index <= 6 && (
                <ListItem key={data.id} paddingY={`5px`}>
                  <HStack>
                    <Image
                      borderRadius={8}
                      src={data.image_background}
                      objectFit="fill"
                      boxSize="32px"
                    />
                    <Button
                      fontSize={selectedId === data.id ? "xl" : "md"}
                      variant="link"
                      onClick={() => {
                        onSelectItem(data);
                      }}
                    >
                      {data.name}
                    </Button>
                  </HStack>
                </ListItem>
              )}
            </>
          );
        })}
      </List>

      <Button
        leftIcon={showMore ? <BiChevronUp /> : <BiChevronDown />}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "show less" : " show more"}
      </Button>
    </VStack>
  );
};

export default GenresList;
