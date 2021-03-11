import React from "react";
import Time from "./Time";
import Detail from "./Detail";

const Programe = (props) => {
  return (
    <div className="Programe">
      <Time time={props.time}></Time>
      <img src={props.image} alt="programe-affiche" />
      <Detail
        see={props.see}
        title={props.title}
        subtitle={props.subtitle}
        direct={props.direct}
        duration={props.duration}
      ></Detail>
    </div>
  );
};

export default Programe;
