import React, { useState, useEffect, useCallback } from "react";

interface Card {
  appLink: String;
  appTitle: String;
  stack: String;
  imageLink: String;
}
interface CardProps {
  list: Card[];
}

export const ProjectsSection = ({ list }: CardProps) => {
  const [List, setList] = useState<Card[]>(list);
  const [active1, setActive1] = useState<string>("toggle-on");
  const [active2, setActive2] = useState<string>("toggle-off");

  const filterList = useCallback(
    (type: String) => {
      let newList: Card[] = list.filter((appObj) => {
        return appObj.stack === type;
      });
      setList(newList);
    },
    [list]
  );

  useEffect(() => {
    filterList("Js");
  }, [filterList]);
  return (
    <div className="Projects_Section">
      <h2 className="title">Projects</h2>
      <div className="buttons">
        <div
          className={active1}
          onClick={() => {
            filterList("Js");
            setActive1("toggle-on");
            setActive2("toggle-off");
          }}
        >
          &lt;HTML, CSS, Js/&gt;{" "}
        </div>
        <div
          className={active2}
          onClick={() => {
            filterList("React");
            setActive1("toggle-off");
            setActive2("toggle-on");
          }}
        >
          {" "}
          &lt;ReactJs, NodeJs/&gt;
        </div>{" "}
      </div>
      <section className="card-section">
        <section className="card_list">
          {List.length > 0 ? (
            List.map((item: Card, index) => {
              return (
                <CardObj
                  appLink={item.appLink}
                  imageLink={item.imageLink}
                  appTitle={item.appTitle}
                  key={item.appTitle + "2"}
                />
              );
            })
          ) : (
            <div>Upload your projects</div>
          )}
        </section>
      </section>
    </div>
  );
};
interface CardProp {
  appLink: String;
  appTitle: String;
  imageLink: String;
}

const CardObj = ({ appLink, imageLink, appTitle }: CardProp) => {
  return (
    <div className="card">
      <a href={`${appLink}`} target="_blank" rel="noreferrer">
        <img src={`/images/${imageLink}`} alt="fgghh" />
      </a>
      <p className="app-title">{appTitle}</p>
    </div>
  );
};
