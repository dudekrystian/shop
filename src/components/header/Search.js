import Reac, { useEffect, useState } from "react";
import { setSearchTerm } from "../../store/searchSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";

export default function Search() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search">
      <input
        onChange={(e) => handleSearchTerm(e)}
        type="search"
        placeholder="What you need?"
      ></input>
      <Link to={`search/${searchTerm}`}></Link>
    </div>
  );
}
