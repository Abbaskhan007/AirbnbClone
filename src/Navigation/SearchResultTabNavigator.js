import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import feed from '../Screens/SearchScreen';
import Maps from '../Screens/SearchResultMap.js'

export default function SearchResultTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name="Posts" component={feed} />
      <Tab.Screen name="Maps" component={Maps} />
    </Tab.Navigator>
  );
}
