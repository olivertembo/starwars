import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme";
import "../styles/globalcss.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
