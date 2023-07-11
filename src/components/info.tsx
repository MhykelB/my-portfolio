import React from "react";

interface infoProps {
  name: String;
  article: String;
  job: String;
}

export const MyInfo = ({ name, article, job }: infoProps) => {
  return (
    <section className="info">
      <h1 className="name">{name}</h1>
      <h1 className="job">
        {article} <span>{job}</span>
      </h1>
    </section>
  );
};
