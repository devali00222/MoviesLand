import React from "react";
import Logo from "../basecomponents/Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="h-16 bg-gray-700 flex items-center justify-between py-0 px-4">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default NavBar;
