import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchRepoData from "../api/useFetchRepoData";

const useSearchRepository = () => {
  const { fetchRepoData } = useFetchRepoData();
  const navigate = useNavigate();
  function handelEnterEvent(event) {
    if (event.key === "Enter") {
      fetchRepoData(event.target.value);
      navigate("/repository/list");
      console.log("do validate", event.target.value);
    }
  }
  return { handelEnterEvent };
};

export default useSearchRepository;
