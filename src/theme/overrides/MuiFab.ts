import { CSSProperties } from "@material-ui/styles";

const root: CSSProperties = {
  boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2)"
};

const sizeSmall: CSSProperties = {
  padding: "0 16px"
};

const extended: CSSProperties = {
  padding: "0 24px",
  "& .MuiIcon-root": {
    marginRight: 8
  },
  "&.MuiFab-sizeSmall": sizeSmall
};

export default {
  root,
  extended
};
