import React, { useState } from "react";

interface Card {
  appLink: String;
  stack?: String[];
  imageLink: String;
}
interface CardProps {
  list: Card[];
}

export const ProjectsSection = ({ list }: CardProps) => {
  const [List, setList] = useState<Card[]>(list);
  const [active1, setActive1] = useState<string>("toggle-on");
  const [active2, setActive2] = useState<string>("toggle-off");

  // function updateList(type: String[]) {
  //   let newList = List.map((appObj) => {
  //     return appObj.stack === type;
  //   });
  //   setList(newList);
  // }
  return (
    <div className="Projects_Section">
      <h2 className="title">Projects</h2>
      <div className="buttons">
        <div
          className={active1}
          onClick={() => {
            setActive1("toggle-on");
            setActive2("toggle-off");
          }}
        >
          &lt;HTML, CSS, Js/&gt;{" "}
        </div>
        <div
          className={active2}
          onClick={() => {
            setActive1("toggle-off");
            setActive2("toggle-on");
          }}
        >
          {" "}
          &lt;ReactJs, NodeJs/&gt;
        </div>{" "}
      </div>
      <section className="card_list">
        {List.length > 0 ? (
          List.map((item: Card) => {
            return (
              <CardObj appLink={item.appLink} imageLink={item.imageLink} />
            );
          })
        ) : (
          <div>Upload your projects</div>
        )}
      </section>
    </div>
  );
};

const CardObj = ({ appLink, imageLink }: Card) => {
  return (
    <div className="card">
      <a href={`${appLink}`}>
        <img src={`${imageLink}`} alt="" />
      </a>
    </div>
  );
};
