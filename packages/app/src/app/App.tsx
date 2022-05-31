import React, { useEffect } from 'react';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import NavigatorContainer from './NavigatorContainer';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <PersistGate loading={null} persistor={persistor} >
      <NavigatorContainer />
    </PersistGate>
  );
};

export default App;
