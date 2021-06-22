import React from "react";
// import "./style.css";

const Search = ({ search, handleFormSubmit, handleInputChange }) => {

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2" onSubmit={handleFormSubmit}>
        <input
          className="form-control"
          value={search}
          name="search"
          onChange={handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default Search;