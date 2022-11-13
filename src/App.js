import logo from "./logo.svg";
import "./App.css";
import SearchPageUI from "./ListOfRepository/ListOfRepository";
import { Container } from "@chakra-ui/react";
import SearchRepository from "./SearchRepository/SearchRepository";
import DetailsOfRepository from "./DetailsOfRepository/DetailsOfRepository";

function App() {
  return (
    <Container maxW={"90vw"} bg="gray.50" w="100vw" h="100vh">
      {" "}
      {/* <SearchPageUI /> */}
      <SearchRepository />
      {/* <DetailsOfRepository /> */}
    </Container>
  );
}

export default App;
