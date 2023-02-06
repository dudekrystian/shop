import CardCategory from "./CardCategory";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";

export default function Category() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  return (
    <div className="category">
      {categories.slice(0, 11).map((category, idx) => (
        <CardCategory name={category} key={idx} />
      ))}
    </div>
  );
}
