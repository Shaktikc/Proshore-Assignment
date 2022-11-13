import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SET_API_PARAMS,
  SET_DETAILS,
} from "../actionTypes/githubDataActionTypes";
import useFetchRepoData from "../api/useFetchRepoData";
import {
  getData,
  getIsFetching,
  getApiParam,
} from "../reducers/githubDataReducer";

const useListOfRepostory = () => {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const apiParam = useSelector(getApiParam);
  const isFetching = useSelector(getIsFetching);
  const { fetchRepoData } = useFetchRepoData();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  function listClickHandler(list) {
    dispatch({ type: SET_DETAILS, payload: list });
    navigate("/repository/details");
  }

  useEffect(() => {
    dispatch({
      type: SET_API_PARAMS,
      payload: { page: page },
    });
  }, [page]);

  useEffect(() => {
    if (apiParam && apiParam.page >= 1) {
      fetchRepoData(apiParam);
    }
  }, [apiParam.page]);

  function nextPageHandler() {
    setPage((prevPage) => prevPage + 1);
  }

  function previousPageHandler() {
    if (page > 1) setPage(page - 1);
  }

  return {
    page,
    setPage,
    nextPageHandler,
    previousPageHandler,
    data,
    isFetching,
    listClickHandler,
  };
};

export default useListOfRepostory;
