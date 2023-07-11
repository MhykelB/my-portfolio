import React from "react";
//AiOutlineWhatsApp;
import { Stacks } from "./stack";
import { SocialLinks } from "./socialLinks";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <Stacks />
      <SocialLinks />
      <div className="links"></div>
    </nav>
  );
};
