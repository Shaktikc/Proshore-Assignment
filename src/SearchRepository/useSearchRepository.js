import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchRepoData from "../api/useFetchRepoData";

import { SET_API_PARAMS } from "../actionTypes/githubDataActionTypes";

const useSearchRepository = () => {
  const dispatch = useDispatch();
  const { fetchRepoData } = useFetchRepoData();
  const navigate = useNavigate();
  function handelEnterEvent(event) {
    if (event.key === "Enter") {
      fetchRepoData(event.target.value);
      dispatch({
        type: SET_API_PARAMS,
        payload: { searchText: event.target.value },
      });
      navigate("/repository/list");
      console.log("do validate", event.target.value);
    }
  }
  return { handelEnterEvent };
};

export default useSearchRepository;
