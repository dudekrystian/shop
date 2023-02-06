import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link className="link" to="/">
        Shop&Happy
      </Link>
    </div>
  );
}
