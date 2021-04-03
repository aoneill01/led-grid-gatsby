import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const ModeCard = ({
  title,
  onSelected,
  children,
  buttonColor = "primary",
  buttonText = "Turn On",
}) => {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        {children}
      </CardContent>
      <CardActions>
        <Button
          color={buttonColor}
          onClick={onSelected}
          variant="contained"
          fullWidth
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ModeCard;
