import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';

import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/graphql/client';

class App extends Component {
  render() {
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </UtilityThemeProvider>
  )
  }
}

export default App;
