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
  InputRightElement,
  Input,
  InputGroup,
  Image,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { getData } from "../reducers/githubDataReducer";
import RepositoriesSorting from "./components/RepositoriesSorting";
import useListOfRepostory from "./useListOfRepository";

const ListOfRepository = () => {
  const {
    page,
    data,
    nextPageHandler,
    previousPageHandler,
    isFetching,
    listClickHandler,
  } = useListOfRepostory();
  console.log("fetichinf", isFetching);
  return (
    <Box>
      <Flex justifyContent={"space-between"} p="1rem" w="85vw">
        {" "}
        <Text fontSize={"xl"}>List of Repositories</Text>
        {/* <Button bg="gray.500" color={"whiteAlpha.800"}>
          SORT BY
        </Button> */}
        <RepositoriesSorting />
      </Flex>

      <TableContainer mt="2rem">
        <Table bg="green.50" size="sm">
          <Thead bg="green.100">
            <Tr>
              <Th>Name</Th>
              <Th>Author</Th>
              <Th>Watchers</Th>
              <Th>Description</Th>
              <Th>last update Date</Th>
              <Th>Number of Stars</Th>
              <Th>Forks</Th>
            </Tr>
          </Thead>
          <Tbody pos="relative">
            {isFetching && (
              <Spinner
                size="xl"
                color="green.800"
                pos="absolute"
                top="11rem"
                left="37rem"
              />
            )}
            {data?.items?.map((list) => {
              return (
                <Tr
                  cursor={"pointer"}
                  key={list.id}
                  onClick={() => listClickHandler(list)}
                >
                  <Td>{list.full_name}</Td>
                  <Td>
                    <Image
                      src={list.owner.avatar_url}
                      w="2rem"
                      h="2rem"
                      borderRadius={"50%"}
                    />
                  </Td>
                  <Td>{list.watchers}</Td>
                  <Td>
                    {/* <Text textOverflow={"ellipsis"} maxW="4rem">
                      {" "}
                      {list.description}
                    </Text> */}

                    {/* <Text> The National Institute for Health and Care</Text>
                    <Text> executive non-departmental public...</Text> */}
                  </Td>
                  <Td>
                    <Moment format="YYYY-MM-DD">
                      {new Date(`${list.updated_at}`)}
                    </Moment>
                  </Td>
                  <Td>{list.stargazers_count}</Td>
                  <Td>{list.forks}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>10 results per page</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
        <Flex justifyContent={"space-between"} p="1rem" w="85vw">
          {" "}
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={previousPageHandler}
          >
            Previous Page
          </Button>
          <Text fontSize={"xl"}>Page {page} of 100</Text>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={nextPageHandler}
          >
            {" "}
            Next Page
          </Button>
        </Flex>
      </TableContainer>
    </Box>
  );
};

export default ListOfRepository;
