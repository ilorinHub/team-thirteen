import '../src/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import { GlobalStyles } from '../src/theme/globalStyles';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { CssBaseline } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Firebase immports
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from '../src/firebase/config';

// Redux imports
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </ReactReduxFirebaseProvider>
        </Provider>
      </CacheProvider>
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
