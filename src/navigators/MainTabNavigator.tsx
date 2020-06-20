import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import { theme } from '../../theme';

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
    <SearchStack.Navigator
    screenOptions={{headerTintColor: theme.color.blueLight}}
    >
      <SearchStack.Screen name="Recherche" component={SearchScreen} />
      <SearchStack.Screen 
        name="PodcastDetails" 
        component={PodcastDetailsScreen} 
        options={{headerTitle: ''}}
      />
    </SearchStack.Navigator>
  )
}

/// ------ BIBLIOTHEQUE -------- \\\
const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Bibliothèque" component={LibraryScreen} />
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

