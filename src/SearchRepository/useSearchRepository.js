import React from "react";
import useFetchRepoData from "../api/useFetchRepoData";

const useSearchRepository = () => {
  const { fetchRepoData } = useFetchRepoData();
  function handelEnterEvent(event) {
    if (event.key === "Enter") {
      fetchRepoData(event.target.value);
      console.log("do validate", event.target.value);
    }
  }
  return { handelEnterEvent };
};

export default useSearchRepository;
