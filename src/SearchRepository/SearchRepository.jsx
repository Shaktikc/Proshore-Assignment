import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import useSearchRepository from "./useSearchRepository";

const SearchRepository = () => {
  const { handelEnterEvent } = useSearchRepository();
  return (
    <Box>
      <Flex
        flexDirection={"column"}
        // bg="green"
        // w="100vw"
        h="100vh"
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontSize={"4xl"} mb="1rem" color="green.600">
          Search Repositories
        </Text>
        <InputGroup size="lg" w="50vw">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search"
            borderWidth={"2px"}
            borderColor="green.400"
            onKeyDown={handelEnterEvent}
          />
          <InputRightElement width="4.5rem">
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default SearchRepository;
