import React, { useContext } from "react";

import { GithubContext } from "../context";
import { Search, Card, Loader } from "../components";

const Home = () => {
  const { loading, users, searchValue } = useContext(GithubContext);

  const isShowSearchResult = !loading && searchValue && users;

  const isShowUsersList = users && users.length;

  return (
    <>
      <Search />

      <div className="row">
        {loading && <Loader />}

        {isShowSearchResult &&
          (isShowUsersList ? (
            users.map((user) => (
              <div key={user.id} className="col-sm-4 mb-4">
                <Card user={user} />
              </div>
            ))
          ) : (
            <p className="col text-center">Ничего не найдено</p>
          ))}
      </div>
    </>
  );
};

export { Home };
