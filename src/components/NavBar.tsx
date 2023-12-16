import { HStack, Text } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  searchGame: (searchText?: string) => void;
}
const NavBar = ({ searchGame }: Props) => {
  return (
    <HStack alignItems={"center"}>
      <Text fontSize={`3xl`} fontWeight={700} whiteSpace={"nowrap"}>
        GameHub
      </Text>
      <HStack
        style={{
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <SearchInput onSearch={searchGame} />
      </HStack>
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
