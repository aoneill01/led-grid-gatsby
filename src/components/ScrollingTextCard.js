import { TextField } from "@material-ui/core";
import * as React from "react";
import { SliderPicker } from "react-color";
import ModeCard from "./ModeCard";

const ScrollingTextCard = ({ onSelected }) => {
  const [text, setText] = React.useState("");
  const [color, setColor] = React.useState("#408cbf");
  return (
    <ModeCard onSelected={() => onSelected(text, color)} title="Scrolling Text">
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Text"
        fullWidth
        style={{ marginBottom: 8 }}
      />
      <SliderPicker color={color} onChange={({ hex }) => setColor(hex)} />
    </ModeCard>
  );
};

export default ScrollingTextCard;
