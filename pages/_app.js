import '../src/styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme'
import { GlobalStyles } from '../src/theme/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
