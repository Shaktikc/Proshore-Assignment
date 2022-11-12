import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DetailsOfRepository = () => {
  return (
    <Box padding={"2rem"} lineHeight="2rem">
      <Text textAlign={"center"} fontSize="2xl">
        Repositories Details
      </Text>
      <Box mt="2rem">
        <Text>Owner Name: Shakti</Text>
        <Text>Repository name: React Project</Text>
        <Text>Number of open issues : 67</Text>
        <Text> Default branch</Text>
      </Box>
    </Box>
  );
};

export default DetailsOfRepository;
