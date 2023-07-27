import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoNodejs } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { color } from "./socialLinks";
import { IconContext } from "react-icons/lib";

export const Stacks = () => {
  return (
    <div className="stacks">
      <IconContext.Provider value={{ className: "icons stacks" }}>
        <AiOutlineHtml5 color={color} />
        <DiSass color=" black" />
        <RiJavascriptLine color={color} />
        <GrReactjs color={color} />
        <BiLogoNodejs color=" black" />
      </IconContext.Provider>
    </div>
  );
};
