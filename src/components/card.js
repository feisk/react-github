import React from "react";

import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <img src={""} alt={""} className="card-img-top" />

      <div className="card-body">
        <h3 className="card-title">Title</h3>
        <Link to={`/profile/${"react"}`} className="btn btn-primary">
          Открыть
        </Link>
      </div>
    </div>
  );
};

export { Card };
