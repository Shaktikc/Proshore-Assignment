import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchRepoData from "../api/useFetchRepoData";

import { SET_API_PARAMS } from "../actionTypes/githubDataActionTypes";
import { getApiParam } from "../reducers/githubDataReducer";
import { useEffect } from "react";

const useSearchRepository = () => {
  const dispatch = useDispatch();
  const { fetchRepoData } = useFetchRepoData();
  const navigate = useNavigate();

  const apiParam = useSelector(getApiParam);

  useEffect(() => {
    fetchRepoData();
  }, [apiParam.searchText]);

  function handelEnterEvent(event) {
    if (event.key === "Enter") {
      dispatch({
        type: SET_API_PARAMS,
        payload: { searchText: event.target.value },
      });

      navigate("/repository/list");
    }
  }
  return { handelEnterEvent };
};

export default useSearchRepository;
