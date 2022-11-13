import logo from "./logo.svg";
import "./App.css";
import SearchPageUI from "./ListOfRepository/ListOfRepository";
import { Container } from "@chakra-ui/react";
import SearchRepository from "./SearchRepository/SearchRepository";
import DetailsOfRepository from "./DetailsOfRepository/DetailsOfRepository";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Container maxW={"90vw"} bg="gray.50" w="100vw" h="100vh">
      <BrowserRouter>
        {" "}
        <Routes>
          <Route path="/" element={<SearchRepository />} />
        </Routes>
        {/* <SearchPageUI /> */}
        {/* <DetailsOfRepository /> */}
      </BrowserRouter>
    </Container>
  );
}

export default App;
