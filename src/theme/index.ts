import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
});

export default Theme;
