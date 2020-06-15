import React, { useReducer } from "react";
import axios from "axios";

import { GithubContext } from "./github-context";
import { githubReducer } from "./github-reducer";
import {
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SEARCH_USERS,
  SET_LOADING,
} from "./types";

const initialState = {
  user: {},
  users: [],
  repos: [],
  loading: false,
  searchValue: "",
};

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const GithubState = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const urlClientPath = `&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  const search = async (value) => {
    try {
      setLoading();

      await axios
        .get(`https://api.github.com/search/users?q=${value}${urlClientPath}`)
        .then(({ data }) =>
          dispatch({
            type: SEARCH_USERS,
            payload: {
              users: data.items,
              searchValue: value,
            },
          })
        );
    } catch (e) {
      console.error(e);
    }
  };

  const getUser = async (name) => {
    try {
      setLoading();

      await axios
        .get(`https://api.github.com/users/${name}?${urlClientPath}`)
        .then(({ data }) =>
          dispatch({
            type: GET_USER,
            payload: data,
          })
        );
    } catch (e) {
      console.error(e);
    }
  };

  const getRepos = async (name) => {
    try {
      setLoading();

      await axios
        .get(
          `https://api.github.com/users/${name}/repos?per_page=100${urlClientPath}`
        )
        .then(({ data }) =>
          dispatch({
            type: GET_REPOS,
            payload: data,
          })
        );
    } catch (e) {
      console.error(e);
    }
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading, searchValue } = state;

  return (
    <GithubContext.Provider
      value={{
        search,
        getRepos,
        getUser,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
        searchValue,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
