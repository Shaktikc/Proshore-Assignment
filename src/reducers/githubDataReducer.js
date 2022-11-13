import {
  DATA_FETCHING,
  DATA_SUCCESS,
  DATA_ERROR,
  SET_API_PARAMS,
} from "../actionTypes/githubDataActionTypes";

const initialState = {
  isFetching: false,
  error: undefined,
  data: undefined,
  apiParams: {
    searchText: undefined,
    page: undefined,
  },
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

    case SET_API_PARAMS: {
      console.log("statejhgkjg", state.apiParams);
      return {
        ...state,
        apiParams: {
          ...state.apiParams,
          searchText: payload.searchText || state.apiParams.searchText,
          page: payload.page || state.apiParams.page,
        },
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
