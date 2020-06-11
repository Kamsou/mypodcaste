import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';



class App extends Component {
  render() {
  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </UtilityThemeProvider>
  )
  }
}

export default App;
