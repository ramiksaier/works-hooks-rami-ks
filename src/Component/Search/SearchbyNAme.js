import React, { useState } from "react";

const Search = ({ setInputSearch }) => {
  return (
    <div>
      <input
        placeholder="search your movie"
        type="text"
        style={{ marginBottom: "5%" }}
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
