import React from "react";

const Moviedetail = ({ location, history }) => {
  const el = location.state.el;
  return (
    <div>
      <h1 className="changcolor">{el.title}</h1>
      <h2 className="changcolor">{el.description}</h2>
      <h3>
        <img src={el.posterUrle} alt="image" />
      </h3>

      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Moviedetail;
