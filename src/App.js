import logo from "./logo.svg";
import "./App.css";
import SearchPageUI from "../src/SearchPageUI/SearchPageUI";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW={"90vw"} bg="gray.50" w="100vw" h="100vh">
      {" "}
      <SearchPageUI />
    </Container>
  );
}

export default App;
