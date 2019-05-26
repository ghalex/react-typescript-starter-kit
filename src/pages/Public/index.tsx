import * as React from "react";
import { SimpleTemplate } from "templates";
import { RouteComponentProps, Link } from "@reach/router";
import { Button, Typography } from "@material-ui/core";
import { Example } from "components";
import auth from "ducks/auth";

type PageProps = RouteComponentProps & {};

const PublicPage = (props: PageProps) => {
  const login = () => auth.login({ email: "ghalex@gmail.com", password: "123456" });

  return (
    <SimpleTemplate>
      <Typography variant="h5" gutterBottom={true}>
        Public page here.
      </Typography>
      <Example />
      <Button variant="contained" color="primary" onClick={login}>
        Click to Login
      </Button>
    </SimpleTemplate>
  );
};

export default PublicPage;
