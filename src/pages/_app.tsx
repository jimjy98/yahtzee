// import "../styles.css";
import type { AppProps } from "next/app";
import { initializeFirebase } from 'api/init';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

initializeFirebase();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: red['A200']
    },
    secondary: {
      main: grey[300]
    },
    background: {
      default: grey[900],
      paper: grey[800]
    }
  }
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
