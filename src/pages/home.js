import React from "react";

import { Search, Card } from "../components";

const Home = () => {
  const cards = Array.from({ length: 12 }, () => Card);

  return (
    <>
      <Search />

      <div className="row">
        {cards.map((Item, index) => (
          <div key={index} className="col-sm-4 mb-4">
            <Item />
          </div>
        ))}
      </div>
    </>
  );
};

export { Home };
