import React from "react";
import Title from "./detail/Title";
import Subtitle from "./detail/Subtitle";
import Duration from "./detail/Duration";
import IsUnsee from "./detail/IsUnsee";
import Direct from "./detail/Direct";

const Detail = (props) => {
  return (
    <div className="detail">
      <Title title={props.title}></Title>
      <Subtitle subtitle={props.subtitle}></Subtitle>
      <Duration duration={props.duration}></Duration>
      <IsUnsee see={props.see}></IsUnsee>
      <Direct direct={props.direct}></Direct>
    </div>
  );
};

export default Detail;
