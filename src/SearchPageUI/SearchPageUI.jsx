import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import RepositoriesSorting from "./components/RepositoriesSorting";

const SearchPageUI = () => {
  return (
    <Box mt="4rem">
      <Flex justifyContent={"space-between"} p="1rem" w="85vw">
        {" "}
        <Text fontSize={"xl"}>List of Repositories</Text>
        {/* <Button bg="gray.500" color={"whiteAlpha.800"}>
          SORT BY
        </Button> */}
        <RepositoriesSorting />
      </Flex>

      <TableContainer mt="2rem">
        <Table bg="green.50">
          <Thead bg="green.100">
            <Tr>
              <Th>Name</Th>
              <Th>Author</Th>
              <Th isNumeric>Watchers</Th>
              <Th isNumeric>Forks</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td isNumeric>25</Td>
              <Td isNumeric>5 peaople</Td>
            </Tr>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td isNumeric>25</Td>
              <Td isNumeric>5 peaople</Td>
            </Tr>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td isNumeric>25</Td>
              <Td isNumeric>5 peaople</Td>
            </Tr>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td isNumeric>25</Td>
              <Td isNumeric>5 peaople</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>10 Item out of 100</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SearchPageUI;
