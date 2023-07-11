import React from "react";
import { AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
interface Links {
  whatsApp: String;
  gitHub: String;
  LinkedIn: String;
  twitter: String;
}

const LinksObj: Links = {
  whatsApp: "",
  gitHub: "https://github.com/MhykelB",
  LinkedIn: "",
  twitter: "",
};
export const color: string = " rgb(28, 46, 64)";
export const size: string = "1.8rem";
export const SocialLinks = () => {
  return (
    <div className="social_links">
      <a href={`${LinksObj.whatsApp}`}>
        <AiOutlineWhatsApp size={size} color={color} />
      </a>
      <a href={`${LinksObj.LinkedIn}`}>
        <CiLinkedin size={size} color={color} />
      </a>
      <a href={`${LinksObj.gitHub}`}>
        <AiOutlineGithub size={size} color={color} />
      </a>
      <a href={`${LinksObj.twitter}`}>
        <CiTwitter size={size} color={color} />
      </a>
    </div>
  );
};
