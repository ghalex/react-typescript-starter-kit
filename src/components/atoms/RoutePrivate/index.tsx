import * as React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  user: any;
  [key: string]: any;
}

const RoutePrivate = ({ component: Component, user, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      // tslint:disable-next-line: jsx-no-lambda
      render={(props: any) =>
        user ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: rest.location }
            }}
          />
        )
      }
    />
  );
};

export default RoutePrivate;
