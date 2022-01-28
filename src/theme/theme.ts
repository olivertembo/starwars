import { createTheme } from "@mui/material/styles";

const font = "font-family: 'Roboto', sans-serif;";
const fontSize = 14;

const theme = createTheme({
  components: {
    MuiButton: {
        // fontFamily: font,
        // fontSize: fontSize,
        // textTransform: "none",
        // fontWeight: "normal",
        // letterSpacing: "0.5px",
        // color: "#fff",
        // backgroundColor: "#00bcd4",
        // "&:hover": {
        //   backgroundColor: "#00acc1",
        // },
        // "&:disabled": {
        //   backgroundColor: "#00acc1",
        // },
    },
  },
  palette: {
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#ff4081",
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
