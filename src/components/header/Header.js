import React from "react";
import UserPanel from "./UserPanel";
import Logo from "./Logo";
import Search from "./Search";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <div className="header">
      <div className="first-item">
        <Logo />
        <UserPanel />
      </div>
      <div className="second-item">
        <MenuButton />
        <Search />
      </div>
    </div>
  );
}
