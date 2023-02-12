import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <Link to={`search/${searchTerm}`}>
        <input
          onChange={(e) => handleSearchTerm(e)}
          type="text"
          placeholder="What you need?"
        ></input>
      </Link>
    </div>
  );
}
