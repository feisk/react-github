import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { GithubContext } from "../context";
import { Loader } from "../components";

const Profile = (props) => {
  const { match } = props;

  const { getUser, getRepos, loading, reposLoading, user, repos } = useContext(
    GithubContext
  );

  useEffect(() => {
    const userName = match.params.name;

    getUser(userName);
    getRepos(userName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  const isShowUserResult = !loading && user;

  const isShowReposResult = !reposLoading && repos;

  const isShowReposList = repos && repos.length;

  return (
    <div className="row">
      <div className="col-12">
        <Link to="/" className="btn btn-link">
          На главную
        </Link>
      </div>

      {loading && <Loader />}

      {isShowUserResult && (
        <div className="col-12 mt-4">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 text-center">
                  <img src={avatar_url} width="100%" height="auto" alt={name} />
                  <a
                    href={html_url}
                    className="btn btn-dark mt-3 w-100"
                    title="Github profile link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>

                <div className="col">
                  <h1 className="mt-1">{name}</h1>

                  {location && <p>Местоположение: {location}</p>}

                  {bio && (
                    <>
                      <h2>Bio</h2>

                      <p>{bio}</p>
                    </>
                  )}

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Username: </strong> {login || "-"}
                    </li>
                    <li className="list-group-item">
                      <strong>Company: </strong> {company || "-"}
                    </li>
                    <li className="list-group-item">
                      <strong>Website: </strong>
                      {blog ? <a href={blog} title="website">{blog}</a> : "-"}
                    </li>
                    <li className="list-group-item">
                      <div className="badge badge-primary mr-2">
                        Подписчики: {followers}
                      </div>

                      <div className="badge badge-success mr-2">
                        Подписан: {following}
                      </div>

                      <div className="badge badge-info mr-2">
                        Репозитории: {public_repos}
                      </div>

                      <div className="badge badge-dark mr-2">
                        Gists: {public_gists}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="col-12 mt-4">
        <h2 className="mb-3">Список репозиториев</h2>

        {reposLoading && (
          <div className="row">
            <Loader />
          </div>
        )}

        {isShowReposResult &&
          (isShowReposList ? (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                title={repo.name}
                className="btn btn-outline-primary mx-1 mb-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                {repo.name}
              </a>
            ))
          ) : (
            <p>Нет публичных репозиториев</p>
          ))}
      </div>
    </div>
  );
};

export { Profile };
