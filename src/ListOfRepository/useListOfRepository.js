import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_API_PARAMS } from "../actionTypes/githubDataActionTypes";
import useFetchRepoData from "../api/useFetchRepoData";
import { getData } from "../reducers/githubDataReducer";

const useListOfRepostory = () => {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  console.log("component data", data);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: SET_API_PARAMS,
      payload: { page: page },
    });
  }, [page, dispatch]);

  function nextPageHandler() {
    setPage(page + 1);
  }

  function previousPageHandler() {
    if (page >= 1) setPage(page - 1);
  }

  console.log("page", page);

  return {
    page,
    setPage,
    nextPageHandler,
    previousPageHandler,
    data,
  };
};

export default useListOfRepostory;
