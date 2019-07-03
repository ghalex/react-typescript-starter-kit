import * as React from "react";
import { SimpleTemplate } from "templates";
import { Typography } from "@material-ui/core";
import { User } from "models";

interface Props {
  user: User;
}

const PrivatePage = ({ user }: Props) => {
  console.log(user);
  return (
    <SimpleTemplate>
      <Typography variant="h1">Private page:</Typography> {user.email}
    </SimpleTemplate>
  );
};

export default PrivatePage;
