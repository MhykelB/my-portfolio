import React from "react";
import { AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { IconContext } from "react-icons/lib";
interface Links {
  whatsApp: String;
  gitHub: String;
  LinkedIn: String;
  twitter: String;
}

const LinksObj: Links = {
  whatsApp: "",
  gitHub: "https://github.com/MhykelB",
  LinkedIn: "https://www.linkedin.com/in/michael-badmus-40712b136",
  twitter: "",
};
export const color: string = " rgb(28, 46, 64)";
export const size: string = "1.8rem";
export const SocialLinks = () => {
  return (
    <div className="social_links">
      <IconContext.Provider value={{ className: "icons links" }}>
        <a href={`${LinksObj.whatsApp}`} target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp size={size} color={color} />
        </a>
        <a href={`${LinksObj.LinkedIn}`} target="_blank" rel="noreferrer">
          <CiLinkedin size={size} color={color} />
        </a>
        <a href={`${LinksObj.gitHub}`} target="_blank" rel="noreferrer">
          <AiOutlineGithub size={size} color={color} />
        </a>
        <a href={`${LinksObj.twitter}`} target="_blank" rel="noreferrer">
          <CiTwitter size={size} color={color} />
        </a>
      </IconContext.Provider>
    </div>
  );
};
