import { HStack, Text } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  searchGame: (searchText?: string) => void;
}
const NavBar = ({ searchGame }: Props) => {
  return (
    <HStack paddingLeft={5} paddingRight={5} alignItems={"center"}>
      <Text fontSize={`3xl`} fontWeight={700} whiteSpace={"nowrap"}>
        Game Hub
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
