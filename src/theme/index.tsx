import { createMuiTheme, Theme as CoreTheme } from "@material-ui/core/styles";

import palette from "./palette";
import overrides from "./overrides";

export interface Theme extends CoreTheme {
  custom?: string;
}

const theme: Theme = createMuiTheme({
  palette,
  overrides
});

theme.custom = "works!";

export default theme;
