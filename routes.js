import React, { useReducer } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Blank from './src/screen';
import Pokemon from './src/screen/List';
import PokemonDetail from './src/screen/List/Detail/Pokemon';
import ItemDetail from './src/screen/List/Detail/Item';
import { createDrawerNavigator } from 'react-navigation-drawer';

const AppNavigator = createStackNavigator(
  {
    Blank: {
      screen: Blank,
      navigationOptions: {
          headerShown: false,
      },
    },
    Pokemon: {
      screen: Pokemon,
      navigationOptions: {
        headerShown: false,
      },
    },
    PokemonDetail: {
      screen: PokemonDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
    ItemDetail: {
      screen: ItemDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Blank'
  },
);

const Drawer = createDrawerNavigator({
  AppNavigator: {
    name: 'AppNavigator',
    screen: AppNavigator,
  },
});

export default createAppContainer(Drawer);
