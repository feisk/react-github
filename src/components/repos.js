import React from "react";

const Repos = (state) => {
  const { repos } = state;

  return (
    <>
      {repos.map((repo) => (
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
      ))}
    </>
  );
};

export { Repos };
