import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
//   useBoolean,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useThrottle from "../hooks/useThrottle";
import { useAppSelector } from "../Redux/store";
import { Product } from "../Utiles/types";

const NavSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
//   const [showDropdown, setShowDropdown] = useBoolean();
  const products = useAppSelector((store) => store.AppReducer.data);
  const throttledText = useThrottle(query, 400);
// console.log(suggestions)
  useEffect(() => {
    //run some logic
    if (throttledText === "") {
      setSuggestions([]);
    } else {
      console.log(throttledText);
      let newSuggestions = products.filter((item) => {
        return item.title
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .indexOf(throttledText) !== -1
          ? true
          : false;
      });
      setSuggestions(newSuggestions);
    //setShowDropdown.on();
    }
  }, [throttledText,products]);

  return (
    <Box>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search product"
          minW={"500"}
          h={"30px"}
          p={"5px"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputRightAddon children={<Search2Icon />} h={"30px"} />
      </InputGroup>
      {suggestions.length > 0 && (
        <Box
          border="1px solid lightgray"
          borderRadius="7px"
          position="absolute"
          top="50px"
          zIndex="10"
          bgColor="white"
          overflow="scroll"
          w="28.5%"
          maxH="300px"
          p={'2'}
        >
          {suggestions.map((item) => {
            return (
              <Link to={`/product/${item.id}`}>
                <Text
                  fontSize="xl"
                  cursor="pointer"
                  textAlign="left"
                  onClick={()=>setQuery("")}
                  p={'2'}
                >
                  {item.title}
                </Text>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default NavSearch;
