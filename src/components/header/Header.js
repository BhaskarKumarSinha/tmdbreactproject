import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  const [query, setQuery] = useState("King");
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Home</span>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <Link to={`/search/${query}`} style={{ textDecoration: "none" }}>
        <Search setQuery={setQuery} query={query} />
      </Link>
    </div>
  );
};

export default Header;
