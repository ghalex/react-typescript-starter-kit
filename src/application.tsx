import * as React from "react";
import { hot } from "react-hot-loader/root";
import { CssBaseline } from "@material-ui/core";
import { Router, LocationProvider } from "@reach/router";
import { ThemeProvider } from "@material-ui/styles";
import { RoutePrivate, RoutePublic } from "containers";

import theme from "./theme";
import * as pages from "./pages";

const App = (props: {}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocationProvider>
        <Router>
          <RoutePublic path="/" component={pages.Public} />
          <RoutePrivate path="/private" component={pages.Private} />
        </Router>
      </LocationProvider>
    </ThemeProvider>
  );
};

export default hot(App);
