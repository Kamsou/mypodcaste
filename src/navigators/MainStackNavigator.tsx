import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../components/listenNow/HomeScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigator;


