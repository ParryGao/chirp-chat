import React from 'react';
import { clearConsole } from 'helpers/tools';
import { NavigationContainer } from '@react-navigation/native';
import Navigation, { getDefaultRoute } from './Navigation';

/* eslint-disable */
console.disableYellowBox = true;
if (!__DEV__) {
  clearConsole();
}
/* eslint-enable */

const App = () => (
  <NavigationContainer>
    <Navigation defaultRoute={getDefaultRoute()} />
  </NavigationContainer>
);

export default App;
