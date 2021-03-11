import React from "react";
import "./App.css";
import m6 from "./asset/img/1200px-M6_2009.png";
import Programe from "./Component/Programe";
import programes from "./programes.json";

function App(props) {
  const tab = programes;
  return (
    <div className="body">
      {console.log(programes)}
      <header>
        <img src={m6} alt="logo-M6" />
        <p>M6</p>
      </header>
      <main>
        {tab.map((programe, index) => {
          return (
            <Programe
              image={programe.image}
              time={programe.time}
              title={programe.title}
              subtitle={programe.type}
              duration={programe.duration}
              see={programe.isUnseen}
              direct={programe.direct}
            ></Programe>
          );
        })}
      </main>
    </div>
  );
}

export default App;
