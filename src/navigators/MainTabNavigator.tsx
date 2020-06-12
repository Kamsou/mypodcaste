import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';

/// ------ EN ECOUTE -------- \\\
const ListenNowStack = createStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen name="En écoute" component={ListenNowScreen} />
    </ListenNowStack.Navigator>
  )
}

/// ------ RECHERCHE -------- \\\
const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="En écoute" component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

/// ------ BIBLIOTHEQUE -------- \\\
const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="En écoute" component={LibraryScreen} />
    </LibraryStack.Navigator>
  )
}


/// ------ INCLUSION DE MES TROIS TABS :) -------- \\\
const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="En écoute" component={ListenNowStackNavigator} />
      <MainTab.Screen name="Recherche" component={SearchStackNavigator} />
      <MainTab.Screen name="Bibliothèque" component={LibraryStackNavigator} />
    </MainTab.Navigator>
  )
}

export default MainTabNavigator;

