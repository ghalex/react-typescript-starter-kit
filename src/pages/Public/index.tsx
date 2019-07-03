import * as React from "react";
import { SimpleTemplate } from "templates";
import { Button, Typography } from "@material-ui/core";
import { Logo } from "components";
import auth from "ducks/auth";
import { withRouter } from "react-router-dom";

const PublicPage = (props: any) => {
  const login = () => {
    return auth
      .login({ email: "ghalex@gmail.com", password: "123456" })
      .then(() => props.history.replace("/private"));
  };

  return (
    <SimpleTemplate>
      <Typography variant="h1">H1 Title here</Typography>
      <Typography variant="h2">Some subtitle using H2 font</Typography>
      <Typography variant="h3" color="textPrimary">
        The quick brown fox jumps over the lazy
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom={true}>
        The quick brown fox jumps over the lazy
      </Typography>
      <Logo />
      <Button variant="contained" color="primary" onClick={login}>
        Click to Login
      </Button>
    </SimpleTemplate>
  );
};

export default withRouter(PublicPage);
