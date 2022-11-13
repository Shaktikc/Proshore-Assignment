import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchRepoData from "../api/useFetchRepoData";

import { SET_API_PARAMS } from "../actionTypes/githubDataActionTypes";
import { getApiParam } from "../reducers/githubDataReducer";

const useSearchRepository = () => {
  const dispatch = useDispatch();
  const { fetchRepoData } = useFetchRepoData();
  const navigate = useNavigate();

  // useEffect(() => {}, []);

  function handelEnterEvent(event) {
    if (event.key === "Enter") {
      dispatch({
        type: SET_API_PARAMS,
        payload: { searchText: event.target.value },
      });
      fetchRepoData();
      navigate("/repository/list");
      console.log("do validate", event.target.value);
    }
  }
  return { handelEnterEvent };
};

export default useSearchRepository;
