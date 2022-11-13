import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_API_PARAMS } from "../../actionTypes/githubDataActionTypes";
import useFetchRepoData from "../../api/useFetchRepoData";
import { getApiParam } from "../../reducers/githubDataReducer";

const useRepositoriesSorting = () => {
  const dispatch = useDispatch();
  const { fetchRepoData } = useFetchRepoData();

  const apiParam = useSelector(getApiParam);

  useEffect(() => {
    if (apiParam && apiParam.sort) {
      fetchRepoData(apiParam);
    }
  }, [apiParam.sort]);

  function sortingHandler(e) {
    dispatch({ type: SET_API_PARAMS, payload: { sort: e.target.value } });
    fetchRepoData();
  }
  return { sortingHandler };
};

export default useRepositoriesSorting;
