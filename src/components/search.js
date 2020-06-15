import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AlertContext, GithubContext } from "../context";

const Root = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;

  & > button {
    min-width: 120px;
    margin-left: 1rem;
    flex-shrink: 0;
  }
`;

const Search = () => {
  const { show, hide, alert } = useContext(AlertContext);
  const { search, clearUsers, searchValue } = useContext(GithubContext);

  const [value, setValue] = useState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimValue = value.trim();

    if (trimValue) {
      search(trimValue);
    } else {
      clearUsers();
      show("Введите имя или никнейм!");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    if (alert) hide();
  };

  return (
    <Root>
      <input
        type="text"
        className="form-control"
        placeholder="Введите имя пользователя или никнейм аккаунта Github"
        value={value}
        onChange={handleChange}
      />

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Поиск
      </button>
    </Root>
  );
};

export { Search };
