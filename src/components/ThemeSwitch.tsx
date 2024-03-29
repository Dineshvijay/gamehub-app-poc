import { Icon, useColorMode } from "@chakra-ui/react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Icon
      boxSize={6}
      onClick={toggleColorMode}
      as={colorMode == "dark" ? IoMdSunny : IoMdMoon}
      color={colorMode == "dark" ? "white" : "black"}
    />
  );
};

export default ThemeSwitch;
