import * as React from "react";
import ModeCard from "./ModeCard";

const OffCard = ({ onSelected }) => {
  return (
    <ModeCard
      onSelected={onSelected}
      title="Panel Off"
      buttonColor="secondary"
      buttonText="Turn Off"
    ></ModeCard>
  );
};

export default OffCard;
