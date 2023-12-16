import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";

interface Props {
  onSearch: (searchQuery?: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [showClose, setShowClose] = useState(false);
  const [searchText, setSearchText] = useState<string | null>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchRef.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(e) => {
            e.target.value ? setShowClose(true) : setShowClose(false);
            setSearchText(e.target.value);
          }}
          value={searchText ?? ""}
          ref={searchRef}
          style={{ borderRadius: 15 }}
          placeholder={"search games"}
        />
        {showClose && (
          <InputRightElement
            children={<BsXCircleFill />}
            onClick={() => {
              setShowClose(false);
              setSearchText(null);
              onSearch("");
            }}
          />
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
