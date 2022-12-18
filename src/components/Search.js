import React from "react";

const Search = ({ query, setQuery }) => {
  const searchMovie = () => {
    setQuery();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery("");
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <input
            style={{ padding: 8 }}
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            key={searchMovie}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
