import * as React from "react";
import { Grid, Snackbar, Typography } from "@material-ui/core";
import OffCard from "../components/OffCard";
import SimpleModeCard from "../components/SimpleModeCard";
import ScrollingTextCard from "../components/ScrollingTextCard";
import "@fontsource/roboto";

const IndexPage = () => {
  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleErrorClose = () => setErrorOpen(false);

  const doFetch = async (params) => {
    try {
      const result = await fetch(`/api/set?${params.toString()}`, {
        method: "POST",
      });
      if (result.status !== 200) {
        setErrorOpen(true);
      }
    } catch (error) {
      console.error(error);
      setErrorOpen(true);
    }
  };

  const createHandlerForMode = (mode) => async () => {
    const params = new URLSearchParams({ mode });
    await doFetch(params);
  };

  const handleScrollingText = async (text, color) => {
    const params = new URLSearchParams({ mode: "text" });
    params.append("args", text);
    params.append("args", color);
    await doFetch(params);
  };

  const simpleCards = [
    { name: "Ms. Pac-Man", mode: "mspacman" },
    { name: "Cat Eyes", mode: "cateyes" },
    { name: "Clock", mode: "clock" },
    { name: "Rainbow", mode: "rainbow" },
  ];

  console.log(errorOpen);
  return (
    <main>
      <title>LED Panel</title>
      <Typography variant="h1" style={{ display: "none" }}>
        Mode
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <OffCard onSelected={createHandlerForMode("off")} />
        </Grid>
        {simpleCards.map(({ name, mode }) => (
          <Grid item xs={12} key={mode}>
            <SimpleModeCard
              name={name}
              onSelected={createHandlerForMode(mode)}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <ScrollingTextCard onSelected={handleScrollingText} />
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={errorOpen}
        autoHideDuration={5000}
        onClose={handleErrorClose}
        message="There was an error communicating with the LED panel!"
      ></Snackbar>
    </main>
  );
};

export default IndexPage;
