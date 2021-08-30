import React from "react";

const Search = ({ keyword, setKeyword }) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="search"
        placeholder="search"
        value={keyword}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
