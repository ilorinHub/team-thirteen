import '../src/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import { GlobalStyles } from '../src/theme/globalStyles';

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
}

export default MyApp;
