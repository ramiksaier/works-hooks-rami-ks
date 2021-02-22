import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Link to={{ pathname: "/movilist" }}>
        <h1 className="bigtitle">Cima Ramos</h1>
      </Link>
    </div>
  );
};

export default Homepage;
