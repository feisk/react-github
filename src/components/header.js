import React from "react";
import styled from "styled-components";

import { Navbar } from "./navbar";

const Root = styled.header`
  display: flex;
  align-items: baseline;
`;

const Title = styled.p`
  flex-shrink: 0;
  margin-bottom: 0;
  font-size: 20px;
  color: white;
  padding-left: 1rem;
`;

const Header = () => {
  return (
    <Root className="bg-primary">
      <Title>Github Поиск</Title>

      <Navbar />
    </Root>
  );
};

export { Header };
