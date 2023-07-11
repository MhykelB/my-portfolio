import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoNodejs } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { color, size } from "./socialLinks";

export const Stacks = () => {
  return (
    <div className="stacks">
      <AiOutlineHtml5 size={size} color={color} />
      <DiSass size={size} color=" black" />
      <RiJavascriptLine size={size} color={color} />
      <GrReactjs size={size} color={color} />
      <BiLogoNodejs size={size} color=" black" />
    </div>
  );
};
