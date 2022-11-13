import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  DATA_FETCHING,
  DATA_SUCCESS,
  DATA_ERROR,
} from "../actionTypes/githubDataActionTypes";

const useFetchRepoData = () => {
  console.log("called");

  const dispatch = useDispatch();

  const fetchRepoData = useCallback((input, sort, order, perPage, page, pg) => {
    //Query Parameters - Reference: https://docs.github.com/en/rest/reference/repos
    dispatch({ type: DATA_FETCHING });
    const queryTerm = `q=` + encodeURIComponent(input || "q");
    const querySort = `${sort ? `&sort=${sort}` : ""}`;
    const queryOrder = `${order ? `&order=${order}` : ""}`;
    const queryPerPage = `&per_page=${perPage || 10}`;
    const queryPage = `&page=${page || 1}`;
    const queryString =
      queryTerm + querySort + queryOrder + queryPerPage + queryPage;

    //console.log("Github API Search Query: ", queryString);
    let url = `https://api.github.com/search/repositories?${queryString}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: DATA_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: DATA_ERROR, payload: error });
      });
  }, []);

  return {
    fetchRepoData,
  };
};

export default useFetchRepoData;
