import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import React from "react";
import useRepositoriesSorting from "./useRepositoriesSorting";

const RepositoriesSorting = () => {
  const { sortingHandler } = useRepositoriesSorting();

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="gray.300"
        // mr="2rem"
        // color={"whiteAlpha.800"}
      >
        Sort By
      </MenuButton>
      <MenuList onClick={sortingHandler}>
        <MenuItem value="forks">Forks</MenuItem>
        <MenuItem value="stars">Stars</MenuItem>
        <MenuItem value="updated">Updated</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default RepositoriesSorting;
