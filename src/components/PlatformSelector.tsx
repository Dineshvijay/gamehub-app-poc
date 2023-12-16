import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platform?: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform, platform }: Props) => {
  const { data } = usePlatforms();
  return (
    <Stack paddingBottom={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {(platform && platform.name) || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => {
                onSelectPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default PlatformSelector;
