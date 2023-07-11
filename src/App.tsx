import React from "react";
import { MyInfo } from "./components/info";
import { NavBar } from "./components/navBar";
import { ProjectsSection } from "./components/projects";
import Applist from "./components/appArray";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MyInfo name={"i'm mICHAEL"} article={"a wEB"} job={"dEVELOPER"} />
      <ProjectsSection list={Applist} />
    </div>
  );
}

export default App;
