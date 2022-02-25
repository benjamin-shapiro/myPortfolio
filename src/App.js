import React from "react";
import "./styles.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={6}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card title={"NashCalc: The Intuitive Way to Game Theorize"} description1={"hello"} description2={"what's up"} link={""} image={""}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card title={"Wingman: Situational Awareness for Cyclists"}  description1={"hello"} description2={"what's up"} link={""} image={""}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card title={"My Photography"}  description1={"hello"} description2={"what's up"} link={"https://bshapirophoto.com/"} image={""}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card title={"The Golden Holograms Initiative"}  description1={"hello"} description2={"what's up"} link={""} image={""}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card title={"The Space Forward Podcast"}  description1={"hello"} description2={"what's up"} link={"https://www.spaceforward.space/"} image={""}/>
      </Grid>
    </Grid>
  );
}
