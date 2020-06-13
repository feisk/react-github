import React, { useContext } from "react";

import { GithubContext } from "../context";
import { Search, Card, Loader } from "../components";

const Home = () => {
  const { loading, users } = useContext(GithubContext);

  const isRenderUsers = !loading && users;

  return (
    <>
      <Search />

      <div className="row">
        {loading && <Loader />}

        {isRenderUsers &&
          (users.length ? (
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
