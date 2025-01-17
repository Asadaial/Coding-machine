import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import { Splash } from './screens';
import SplashScreen from 'react-native-splash-screen';



const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return(
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={<Splash/>} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
