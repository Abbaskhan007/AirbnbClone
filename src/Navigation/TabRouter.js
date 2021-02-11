import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExporeNavigation from './ExploreNavigation'
import SearchResultMap from '../Screens/SearchResultMap.js'

const Tabs = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tabs.Navigator tabBarOptions={{activeTintColor: '#f15454'}}>
      <Tabs.Screen
        name="Explore"
        component={SearchResultMap}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="3"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="4"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="5"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
