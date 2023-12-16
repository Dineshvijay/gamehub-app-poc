import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SortOrderType {
  [key: string]: string;
}
interface Props {
  onSelectItem: (sortOrder: string) => void;
}
const SortSelector = ({ onSelectItem }: Props) => {
  const sortOrders: Array<SortOrderType> = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const [selectedOrder, setOrder] = useState<SortOrderType>();
  return (
    <Stack paddingBottom={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {` Order By: ${selectedOrder ? selectedOrder.label : "Relevance"}`}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.label}
              value={order.value}
              onClick={() => {
                onSelectItem(order.value);
                setOrder(order);
              }}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default SortSelector;
