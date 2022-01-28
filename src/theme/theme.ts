import { createTheme } from "@mui/material/styles";

const font = "'Poppins', sans-serif";
const fontSize = 28;
const colorPrimary = "#8c8d9e";
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        size: "large",
        fullWidth: false,
        disableElevation: true,
      },
    },
  },
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: "#FBC638",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: font,
    fontSize: fontSize,
  },
});

export default theme;
