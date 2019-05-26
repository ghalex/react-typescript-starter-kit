import * as React from "react";

const RoutePublic = ({ component: Component, ...rest }: any) => <Component {...rest} />;

export default RoutePublic;
