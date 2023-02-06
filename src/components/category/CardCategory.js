import React from "react";
import { Link } from "react-router-dom";

export default function CardCategory({ name }) {
  return (
    <>
      <div className="card">
        <div className="single">
          <i class="bi bi-bag"></i>
          <Link className="link" to={`category/${name}`}>
            {name}
          </Link>
        </div>
      </div>
    </>
  );
}
