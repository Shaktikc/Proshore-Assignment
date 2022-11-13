import React from "react";
import { useDispatch } from "react-redux";
import { SET_API_PARAMS } from "../../actionTypes/githubDataActionTypes";
import useFetchRepoData from "../../api/useFetchRepoData";

const useRepositoriesSorting = () => {
  const dispatch = useDispatch();
  const { fetchRepoData } = useFetchRepoData();

  function sortingHandler(e) {
    dispatch({ type: SET_API_PARAMS, payload: { sort: e.target.value } });
    fetchRepoData();
  }
  return { sortingHandler };
};

export default useRepositoriesSorting;
