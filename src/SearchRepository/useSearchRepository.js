import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SET_API_PARAMS } from "../actionTypes/githubDataActionTypes";

const useSearchRepository = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handelEnterEvent(event) {
    if (event.key === "Enter") {
      dispatch({
        type: SET_API_PARAMS,
        payload: { searchText: event.target.value },
      });

      navigate("/repository/list");
    }
  }

  function handelOnClick() {
    navigate("/repository/list");
  }
  return { handelEnterEvent, handelOnClick };
};

export default useSearchRepository;
