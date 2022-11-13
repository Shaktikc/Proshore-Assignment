import { Box, Text } from "@chakra-ui/react";
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
        <Text>Owner Name: {detailsData?.owner.login}</Text>
        <Text>Repository name:{detailsData?.full_name}</Text>
        <Text>Number of open issues : {detailsData?.open_issues}</Text>
        <Text> Default branch : {detailsData.default_branch}</Text>
      </Box>
    </Box>
  );
};

export default DetailsOfRepository;
