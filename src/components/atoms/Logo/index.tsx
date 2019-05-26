import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    letterSpacing: 4,
    padding: 22
  }
}));

const Component = (props: Props) => {
  const classes = useStyles();
  return (
    <Typography variant="h2" color="primary" className={classes.root}>
      SHOPMATE
    </Typography>
  );
};

export default Component;
