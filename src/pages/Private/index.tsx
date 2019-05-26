import * as React from "react";
import { SimpleTemplate } from "templates";
import { PrivateRouteProps } from "types";
import { Typography } from "@material-ui/core";

type PageProps = PrivateRouteProps & {};

const PublicPage = ({ user }: PageProps) => {
  return (
    <SimpleTemplate>
      <Typography variant="h1">Private page:</Typography> {user.email}
    </SimpleTemplate>
  );
};

export default PublicPage;
