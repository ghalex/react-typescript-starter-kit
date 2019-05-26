import * as React from "react";
import { Redirect } from "@reach/router";
import { useStore } from "effector-react";
import auth from "ducks/auth";

const RoutePrivate = ({ component: Component, ...rest }: any) => {
  const user = useStore(auth.$user);

  return (
    <React.Fragment>
      {user ? <Component {...rest} user={user} /> : <Redirect from="" to="/" noThrow={true} />}
    </React.Fragment>
  );
};

export default RoutePrivate;
