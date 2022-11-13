import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DATA_FETCHING,
  DATA_SUCCESS,
  DATA_ERROR,
} from "../actionTypes/githubDataActionTypes";
import { getApiParam } from "../reducers/githubDataReducer";

const useFetchRepoData = () => {
  const dispatch = useDispatch();
  const apiParam = useSelector(getApiParam);
  console.log("apiParam", apiParam);

  const fetchRepoData = () => {
    //Query Parameters - Reference: https://docs.github.com/en/rest/reference/repos
    dispatch({ type: DATA_FETCHING });
    const queryTerm = `q=` + encodeURIComponent(apiParam.searchText || "q");
    const querySort = `${apiParam.sort ? `&sort=${apiParam.sort}` : ""}`;
    const queryOrder = `${apiParam.order ? `&order=${apiParam.order}` : ""}`;
    const queryPerPage = `&per_page=${apiParam.perPage || 10}`;
    const queryPage = `&page=${apiParam.page || 1}`;
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
  };

  return {
    fetchRepoData,
  };
};

export default useFetchRepoData;
