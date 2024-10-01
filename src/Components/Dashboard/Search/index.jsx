import React from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search} // Use the search value passed as a prop
        onChange={(e) => onSearchChange(e)} // Call onSearchChange when input changes
      />
    </div>
  );
}

export default Search;
