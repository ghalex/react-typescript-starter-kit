import * as React from "react";
import { Redirect } from "react-router-dom";

interface Props {
  user: any;
  [key: string]: any;
}

const RoutePrivate = ({ component: Component, user, ...rest }: Props) => {
  return (
    <React.Fragment>
      {user ? (
        <Component {...rest} user={user} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: rest.location }
          }}
        />
      )}
    </React.Fragment>
  );
};

export default RoutePrivate;
