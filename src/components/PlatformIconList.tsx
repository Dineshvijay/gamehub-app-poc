import {
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaGlobe,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    web: FaGlobe,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };
  return (
    <HStack>
      {platforms.map((platform, index) => {
        return (
          index < 5 && (
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color={"gray.400"}
            />
          )
        );
      })}
      {platforms.length > 5 && platforms.length - 5 != 0 && (
        <Text color={"gray.500"} as="b">
          +{platforms.length - 5}
        </Text>
      )}
    </HStack>
  );
};

export default PlatformIconList;
