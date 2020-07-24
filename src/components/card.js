import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled(Link)`
  height: 100%;
  box-shadow: 0px 4px 11px rgba(132, 140, 168, 0.1);
  transition: 0.15s ease-out;
  transition-property: color, box-shadow;

  &:hover {
    color: currentColor;
    text-decoration: none;
    box-shadow: 0px 4px 11px rgba(132, 140, 168, 0.15);

    .card-img-top {
      transition-duration: 5s;
      transform: scale(1.125);
    }
  }
`;

const Image = styled.div`
  overflow: hidden;

  .card-img-top {
    transition: transform 0.5s ease;
    will-change: transform;
  }
`;

const Text = styled.div`
  padding: 1rem;

  h3 {
    margin-bottom: 0.25rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Card = (state) => {
  const { user } = state;

  return (
    <Root to={`/profile/${user.login}`} className="card">
      <Image>
        <img src={user.avatar_url} alt={user.login} className="card-img-top" />
      </Image>
      <Text>
        <h3>{user.login}</h3>
      </Text>
    </Root>
  );
};

export { Card };
