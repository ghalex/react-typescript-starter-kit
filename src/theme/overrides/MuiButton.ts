import { CSSProperties } from "@material-ui/styles";

const root: CSSProperties = {
  textTransform: "none"
};

const contained: CSSProperties = {
  boxShadow: "none",
  textTransform: "none",
  "&:active": {
    boxShadow: "none"
  }
};

export default {
  root,
  contained
};
