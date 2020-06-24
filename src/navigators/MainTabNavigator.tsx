import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import { theme } from '../../theme';
import FeatherIcon from 'react-native-vector-icons/Feather'
const ICON_SIZE = 20;

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
    screenOptions={{
      headerTintColor: theme.color.blueLight,
      headerTitleStyle: {
        color: theme.color.black,
      }
    }}
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
    <MainTab.Navigator tabBarOptions={{
      activeTintColor: theme.color.blueLight,
    }}>
      <MainTab.Screen 
        name="En écoute" 
        component={ListenNowStackNavigator} 
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE}  name="headphones"/>
          )
        }}
      />
      <MainTab.Screen 
        name="Bibliothèque" 
        component={LibraryStackNavigator} 
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="inbox"/>
          )
        }}
      />
      <MainTab.Screen 
        name="Recherche" 
        component={SearchStackNavigator} 
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE}  name="search"/>
          )
        }}
      />
    </MainTab.Navigator>
  )
}

export default MainTabNavigator;

