import type { AppProps } from "next/app";
import theme from "../src/theme/theme";
import store from '../src/app/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globalcss.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider></Provider>
  );
}

export default MyApp;
