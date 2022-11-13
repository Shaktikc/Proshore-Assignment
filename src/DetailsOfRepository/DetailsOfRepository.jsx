import { Box, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { getDetails } from "../reducers/githubDataReducer";

const DetailsOfRepository = () => {
  const detailsData = useSelector(getDetails);

  return (
    <Box padding={"2rem"} lineHeight="2rem">
      <Text textAlign={"center"} fontSize="2xl">
        Repositories Details
      </Text>
      <Box mt="2rem">
        <HStack>
          {" "}
          <Text>Owner Name: </Text>
          <a
            href={detailsData.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text color="blue"> {detailsData?.owner.login}</Text>
          </a>
        </HStack>
        <HStack>
          {" "}
          <Text>Repository name:</Text>
          <a
            href={detailsData.svn_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text color="blue"> {detailsData?.full_name}</Text>
          </a>
        </HStack>

        <Text>Number of open issues : {detailsData?.open_issues}</Text>
        <Text> Default branch : {detailsData.default_branch}</Text>
      </Box>
    </Box>
  );
};

export default DetailsOfRepository;
