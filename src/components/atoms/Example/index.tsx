import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}));

const Component = (props: Props) => {
  const classes = useStyles();
  return <div className={classes.root}>contetn</div>;
};

export default Component;
