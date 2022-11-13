import {
  DATA_FETCHING,
  DATA_SUCCESS,
  DATA_ERROR,
} from "../actionTypes/githubDataActionTypes";

const initialState = {
  isFetching: false,
  error: undefined,
  data: undefined,
};

const getGithubDataReducer = (state = initialState, payload) => {
  console.log("payload", payload);
  const { type } = payload;
  payload = payload.payload || payload;

  switch (type) {
    case DATA_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case DATA_SUCCESS: {
      return {
        ...state,
        data: payload,
        isFetching: false,
      };
    }

    case DATA_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: payload.error,
        data: undefined,
      };
    }

    default:
      return state;
  }
};

export default getGithubDataReducer;

//selector functions
export const getData = (state) => {
  console.log("state", state);
  return state.apiData.data;
};
export const getIsFetching = (state) => state.apiData.isFetching;
export const getDataError = (state) => state.apiData.error;
