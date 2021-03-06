import {
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SEARCH_USERS,
  SET_LOADING,
  SET_REPOS_LOADING,
} from "./types";

const handlers = {
  [SEARCH_USERS]: (state, { payload }) => ({
    ...state,
    users: payload.users,
    searchValue: payload.searchValue,
    loading: false,
  }),
  [GET_REPOS]: (state, { payload }) => ({
    ...state,
    repos: payload,
    reposLoading: false,
  }),
  [GET_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false,
  }),
  [SET_LOADING]: (state) => ({
    ...state,
    loading: true,
  }),
  [SET_REPOS_LOADING]: (state) => ({
    ...state,
    reposLoading: true,
  }),
  [CLEAR_USERS]: (state) => ({
    ...state,
    searchValue: "",
    users: [],
  }),
  DEFAULT: (state) => state,
};

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
