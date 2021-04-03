import * as React from "react";
import ModeCard from "./ModeCard";

const SimpleModeCard = ({ name, onSelected }) => {
  return <ModeCard onSelected={onSelected} title={name}></ModeCard>;
};

export default SimpleModeCard;
